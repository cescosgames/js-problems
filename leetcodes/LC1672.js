accounts1 = [[1,2,3],[3,2,1]];
accounts2 = [[1,5],[7,3],[3,5]];
accounts3 = [[2,8,7],[7,1,3],[1,9,5]];

// my answer
function findHighestValNested(accs) {
    let highestVal = 0;

    accs.forEach(account => {
        const totalVal = account.reduce((acc, val) => acc + val, 0);
        if (totalVal > highestVal) {
            highestVal = totalVal;
        };
    });

    return highestVal;
};

console.log(findHighestValNested(accounts3));