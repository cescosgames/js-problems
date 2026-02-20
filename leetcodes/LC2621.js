const input = 100;

async function sleep(millis) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined);
        }, millis);
    });
    await p;
};


let t = Date.now()
await sleep(100).then(() => console.log(Date.now() - t)) // 100