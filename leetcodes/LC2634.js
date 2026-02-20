// filter without using filter problem
var filter = function(arr, fn) {
    const filteredArr = [];
    arr.forEach((ele, index) => {
        fn(ele, index) ? filteredArr.push(ele) : null;
    });

    return filteredArr;
};