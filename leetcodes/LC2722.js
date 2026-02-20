// LC2722

// given two arrays, RETURN a new array (joinedArray). all objects in input arrays will contain an id that is an int
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. 
// length of joinedArr should be length of unique values of id
// returned array should be sorted in ascending order based on id key
// if only on arr has id, that single object should be included without modification
// if two objects share an id, they should be merged

// example inputs
// example 1
const EX1arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
]
const EX1arr2 = [
    { "id": 3, "x": 5 }
]
// example 2
const EX2arr1 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 2, "x": 3, "y": 6 }
]
const EX2arr2 = [
    { "id": 2, "x": 10, "y": 20 },
    { "id": 3, "x": 0, "y": 0 }
]

var join = function (arr1, arr2) {
    // track if id was tracked by tracking objects with ID as key for ability to look up existing object by Key
    let trackedIDs = {};

    // loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // check if we already stored the id by checking if a key === to our current object ID already exists
        if (trackedIDs[arr1[i].id]) {
            const mergedObj = Object.assign(arr1[i], trackedIDs[arr1[i].id]); // if we have a match, merge the object with the stored object using Object.assign
            trackedIDs[arr1[i].id] = mergedObj // and updated our value at this key with our new merged object
        } else {
            trackedIDs[arr1[i].id] = arr1[i] // if they don't match, add updated object to tracked IDs using the objects ID as the KEY
        };
    };

    // repeat process for second array
    for (let i = 0; i < arr2.length; i++) {
        // check if we already stored the id
        if (trackedIDs[arr2[i].id]) {
            const mergedObj = Object.assign(trackedIDs[arr2[i].id], arr2[i]); // if we have a match, merge the object with the stored object
            trackedIDs[arr2[i].id] = mergedObj // and add updated object to tracked IDs
        } else {
            trackedIDs[arr2[i].id] = arr2[i] // if they don't match, add updated object to tracked IDs using the objects ID as the key
        };
    };

    return Object.values(trackedIDs)
};

console.log(join(EX2arr1, EX2arr2));