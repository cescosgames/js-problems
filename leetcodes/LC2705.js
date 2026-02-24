// LC2705

// given an object or array obj, return a compact object.
// a compact object is the same as the original object, except with keys containing falsy values removed

// SOLVED: reviewing this problem since it stumped me
// the challenge asked us to remove falsy values from an object OR array and return a new object/array with falsy values removed
// this meant we needed to A. remove falsy values from object and B. remove falsy values from array since these are handled differently.
// we start by figuring out what we are dealing with, an object or array using Array.isArray and typeof obj === 'object' *AN ARRAY IS TREATED LIKE AN OBJECT IN JS, TYPEOFOBJ RETURNS OBJECT ON ARRAY*
// then, for the array, we can filter out all falsy values to remove falsy values and return the filtered array
// for the object, we can use delete obj[key] instead to remove a falsy value
// now this works for the top level, by doing these filters we have removed falsy values at the top level, what if things are nested?
// we need to introduce a check to see if we hit an object or array when iterating over our input
// if we hit an object or array, we want to call this function again to call on the sublevel
// and that wraps it up! the one issue however lies with null returning true on typeof element === 'object'. this is a JS quirk I didn't know about so I added a hard check to see if we recieved null
// my lingering question is why don't we need to spread our filtered arr? because we're pushing the recursed result as a single element, not flattening the result

var compactObject = function(obj) {
    // so apparently type of null is an object???

    // check if we hit an array
    if (Array.isArray(obj)) {
        const filteredArr = []
        // for each element in the array
        obj.forEach(element => {
            if (typeof element === 'object' || Array.isArray(element)) {
                // console.log(`down a level ${element}`)
                if (element === null) return // null is an object I guess? typeof(null) returns object... idk man
                filteredArr.push(compactObject(element))
            } else if (element) {
                 filteredArr.push(element)
            }
        });
        return filteredArr
    }
    else if (typeof obj === 'object') { // check if we hit an object
        // for each elemnt in the object
        for (let key in obj) {
            if (typeof obj[key] === 'object' || Array.isArray(obj[key])) { // if we hit another object or array, reset
                // console.log(`down a level ${obj[key]}`)
                obj[key] = compactObject(obj[key]); // set the value equal to what we return, in this case the value with all empty elements or empty keys removed
            };
            if (!obj[key]) {
                // console.log(`${obj[key]} <- falsy ele`);
                delete obj[key]; // otherwise delete the key
            }
        }
        return obj
    }
};

// example 1
const obj1 = [null, 0, false, 1]

// my example
const obj2 = { 1: null, 2: 0, 3: false, 4: 1 }

// example 2
const obj3 = {"a": null, "b": [false, 1]}

// example 3
const obj4 = [null, 0, 5, [0], [false, 16]]

// test case 10
const obj5 = {"a": 1, "b": 1, "c": null, "d": "false", "e": 0}

// console.log(compactObject(obj1))
// console.log(compactObject(obj2))
// console.log(compactObject(obj3))
console.log(compactObject(obj5))
