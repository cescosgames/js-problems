// LCgetter.js
// Usage: node LCgetter.js https://leetcode.com/problems/two-sum/
// ONLY CUT FROM HTTPS TO END OF PROBLEM NAME

// import fs and path to modify our filesystem
const fs = require('fs');
const path = require('path');

// 3rd CLI (1. node 2. filename (LCgetter.js) 3. URL)
const url = process.argv[2];

// if we don't have a URL, tell user how to use and exit
if (!url) {
    console.error('Usage: node LCgetter.js <leetcode-problem-url>');
    process.exit(1);
}

// extract the slug from the URL e.g. "two-sum" from ".../problems/two-sum/..."
const slugMatch = url.match(/\/problems\/([\w-]+)/); // use regex to get the slug by getting the part after /problems/ which is why we have to only copy and paste until end of problem name
if (!slugMatch) { // if we don't match it, error and exit
    console.error('Could not parse problem slug from URL:', url);
    process.exit(1);
}

// get the problem name
const slug = slugMatch[1];

// our query to the GraphQL API and what we want from it
// LC has a public graphql api that takes in a request template that we can access through the slug (problem name)
const query = `
  query getQuestion($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      title
      content
      codeSnippets { langSlug code }
    }
  }
`;

// make our fetch request to the leetcodeAPI
async function fetchProblem() {
    const res = await fetch('https://leetcode.com/graphql', { // fetch from their public graphql api
        method: 'POST', // why is this post and not get? because in graphql even read operations use POST
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com', // leetcode expects a referer
        },
        body: JSON.stringify({ query, variables: { titleSlug: slug } }),
    });

    // check if we got our response
    if (!res.ok) {
        console.error(`GraphQL request failed: ${res.status} ${res.statusText}`);
        process.exit(1);
    }

    // get our json back
    const json = await res.json();
    const q = json?.data?.question;

    // if it returns no data exit
    if (!q) {
        console.error('Problem not found or API returned no data.');
        process.exit(1);
    }

    // otherwise return our json data
    return q;
}

// cut HTML at first "Example 1:" occurrence, strip tags from description-only portion
function extractDescription(html) {
    const cutoff = html.search(/<[^>]*>\s*Example\s*1\s*:/i);
    const descHtml = cutoff !== -1 ? html.slice(0, cutoff) : html;
    return descHtml
        .replace(/<\/?(p|div|li|ul|ol|br\s*\/?)[^>]*>/gi, '\n')
        .replace(/<\/?(strong|em|code|sup|sub)[^>]*>/gi, '')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&#(\d+);/g, (_, c) => String.fromCharCode(c))
        .split('\n')
        .map(l => l.trim())
        .filter(l => l)
        .map(l => `// ${l}`)
        .join('\n')
        .trim();
}

// smart comma-split that handles array values containing commas
function splitInputParams(inputLine) {
    const raw = inputLine.replace(/^input:\s*/i, '').trim();
    if (!raw) return [];
    // Split on ", " only when followed by an identifier then "="
    return raw.split(/,\s*(?=[a-zA-Z_]\w*\s*=)/);
}

// parse <pre> blocks to get structured example objects
function extractExamples(html) {
    const examples = [];
    const preRegex = /<pre>([\s\S]*?)<\/pre>/gi;
    let match, i = 1;
    while ((match = preRegex.exec(html)) !== null) {
        const text = match[1]
            .replace(/<[^>]+>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
            .trim();
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
        const inputLine = lines.find(l => /^input:/i.test(l)) || '';
        const outputLine = lines.find(l => /^output:/i.test(l)) || '';
        const explanationLine = lines.find(l => /^explanation:/i.test(l)) || '';
        if (!inputLine) continue;
        const params = splitInputParams(inputLine);
        examples.push({
            index: i++,
            params,
            output: outputLine.replace(/^output:\s*/i, '').trim(),
            explanation: explanationLine.replace(/^explanation:\s*/i, '').trim(),
        });
    }
    return examples;
}

// find the JS snippet and strip JSDoc
function extractCodeSnippet(codeSnippets) {
    if (!codeSnippets?.length) return '';
    const js = codeSnippets.find(s => s.langSlug === 'javascript');
    if (!js) return '';
    return js.code.replace(/\/\*\*[\s\S]*?\*\//g, '').trim();
}

// putting it all together
async function main() {
    console.log(`Fetching problem: ${slug}...`);
    const q = await fetchProblem();

    const { questionId, title, content, codeSnippets } = q;

    const description = extractDescription(content);
    const stub = extractCodeSnippet(codeSnippets);
    const examples = extractExamples(content);

    const usedNames = new Set();
    const exampleBlocks = examples.map(({ index, params, output, explanation }) => {
        const lines = [`// Example ${index}:`];
        for (const p of params) {
            const eqIdx = p.indexOf('=');
            let name = p.slice(0, eqIdx).trim();
            const value = p.slice(eqIdx + 1).trim();
            if (usedNames.has(name)) name = `${name}_${index}`;
            usedNames.add(name);
            lines.push(`const ${name} = ${value}`);
        }
        lines.push(`// Output: ${output}`);
        if (explanation) lines.push(`// Explanation: ${explanation}`);
        return lines.join('\n');
    });

    const fileContent = [
        `// LC ${questionId} - ${title}`,
        '',
        description,
        '',
        '// intuition: ',
        stub,
        '',
        exampleBlocks.join('\n\n'),
        '',
        '',
    ].join('\n');

    const filename = `LC${questionId}.js`;
    const outPath = path.join(__dirname, 'leetcodes', filename);

    if (fs.existsSync(outPath)) {
        console.error(`File already exists: leetcodes/${filename}`);
        process.exit(1);
    }

    fs.writeFileSync(outPath, fileContent, 'utf8');
    console.log(`Created: leetcodes/${filename}`);
}

main();
