// LC2705

// given an object or array obj, return a compact object.
// a compact object is the same as the original object, except with keys containing falsy values removed

var compactObject = function(obj) {
    // check if object or array
    if (Array.isArray(obj)) {
        const filteredArr = []
        // for each element in the object
        obj.forEach(element => {
            if (element) filteredArr.push(element);
        });
        return filteredArr
    }
    else if (typeof obj === 'object') {
        // for each elemnt in the object
        for (let key in obj) {
            if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
                console.log(`down a level ${obj[key]}`)
                compactObject(obj[key]);
            };
            if (!obj[key]) {
                // console.log(`${obj[key]} <- falsy ele`);
                delete obj[key];
            } else {
                // console.log(`${obj[key]} <- truthy ele`);
            }
        }
        return obj
    } else {
        console.log("not obj or arr")
    }
};

// example 1
const obj1 = [null, 0, false, 1]

// my example
const obj2 = { 1: null, 2: 0, 3: false, 4: 1 }

// example 2
const obj3 = {"a": null, "b": [false, 1]}

// console.log(compactObject(obj1))
// console.log(compactObject(obj2))
console.log(compactObject(obj3))