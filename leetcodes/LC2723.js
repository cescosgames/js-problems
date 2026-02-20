const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function(promise1, promise2) {
    const p1 = await promise1;
    const p2 = await promise2;

    return (p1 + p2);
};

// console.log(addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log)); // 4
addTwoPromises(promise1, promise2).then(console.log)