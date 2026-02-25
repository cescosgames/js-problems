// LCgetter.js
// Usage: node LCgetter.js https://leetcode.com/problems/two-sum/
// ONLY CUT FROM HTTPS TO END OF PROBLEM NAME

// import fs and path to modify our filesystem
const fs = require('fs');
const path = require('path');

// 3rd CLI (1. node 2. filename (LCgetter.js) 3. URL)
const url = process.argv[2];

// if we don't have a URL error and exit
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
      exampleTestcases
    }
  }
`;

// make our fetch request to the leetcodeAPI
async function fetchProblem() {
    const res = await fetch('https://leetcode.com/graphql', { // fetch from their public graphql
        method: 'POST', // why is this post and not get? because in graphql even read operations use POST
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com', // leetcode expects a referer
        },
        body: JSON.stringify({ query, variables: { titleSlug: slug } }),
    });

    // check if we got oru response
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

// regex to strip html in 2 passes. First it handles the pre blocks (input/output examples) and strips all tags inside but preserves text
// first time encountering pre blocks, this is how leetcode problems are returned, they put examples <pre> </pre> tags
function stripHtml(html) {
    return html
        .replace(/<pre>([\s\S]*?)<\/pre>/gi, (_, inner) => {
            // preserve pre blocks (examples) with a blank line around them
            return '\n' + inner
                .replace(/<[^>]+>/g, '')
                .replace(/&nbsp;/g, ' ')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .trim() + '\n';
        }) // then it strips all remaining html tags, collapses blank lines, and trips whitespace
        .replace(/<\/?(p|div|li|ul|ol|strong|em|code|sup|sub|br\s*\/?)[^>]*>/gi, '')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code))
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

// format our description by taking our stripped html and prepends // to it's all one big comment block
function formatDescription(text) {
    // wrap each line as a comment line
    return text
        .split('\n')
        .map(line => `// ${line}`)
        .join('\n');
}

// putting it all together
async function main() {
    console.log(`Fetching problem: ${slug}...`);
    const q = await fetchProblem();

    const { questionId, title, content, exampleTestcases } = q;

    const description = stripHtml(content);
    const examples = exampleTestcases
        ? exampleTestcases.split('\n').filter(Boolean)
        : [];

    const examplesComment = examples.length
        ? '// Examples:\n' + examples.map(e => `// ${e}`).join('\n')
        : '// No examples available.';

    const fileContent = [
        `// LC ${questionId} - ${title}`,
        '',
        formatDescription(description),
        '',
        examplesComment,
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
