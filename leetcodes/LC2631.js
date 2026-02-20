// LC2631

// write a function that can be called on an array and return a grouped version of the array
// a grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generated the key
// any order is acceptable


// our group by function
Array.prototype.groupBy = function(fn) {
    // declaring our empty object to populate and return
    let obj = {}; 

    for (let i = 0; i < this.length; i++) {
        // get the key which is output of fn(arr[i])
        const key = fn(this[i]);
        // add key and value to obj where value is an ARRAY containing all items in the original array which generate the key
        if (obj[key]) {
            // key already exists so array already exists, push on to it
            obj[key].push(this[i])
        } else {
            // key didn't exist, generate it as first element of array
            obj[key] = [this[i]];
        };
    };
    // needs to return an object 
    return obj;
};

// demo
// console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}

// example 1
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
console.log(array.groupBy(fn))