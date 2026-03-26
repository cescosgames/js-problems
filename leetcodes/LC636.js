// LC 636 - Exclusive Time of Functions

// On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1.
// Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp.
// You are given a list logs, where logs[i] represents the ith log message formatted as a string "{function_id}:{"start" | "end"}:{timestamp}". For example, "0:start:3" means a function call with function ID 0 started at the beginning of timestamp 3, and "1:end:2" means a function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively.
// A function's exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice, one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is 2 + 1 = 3.
// Return the exclusive time of each function in an array, where the value at the ith index represents the exclusive time for the function with ID i.

// intuition: none really
var exclusiveTime = function (n, logs) {
    const timeArr = new Array(n).fill(0); // create an array with as many function IDs (n) as we have, all set to 0
    const stack = []; // tracking our stack as an array

    let prevTime = 0; // track previous time elapsed

    // loop through each 'function'
    for (let i = 0; i < logs.length; i++) {
        const [idStr, type, timeStr] = logs[i].split(":"); // destructure our function data (id, start/end, time)
        const id = Number(idStr); // convert to number: our function ID
        const time = Number(timeStr); // convert to number: our start/end time

        // if we hit a start
        if (type === "start") {
            if (stack.length > 0) { // check if we have something in our stack
                const curr = stack[stack.length - 1]; // if we do, get the most recent item (i.e. active) in our stack (length-1) this is an id
                timeArr[curr] += time - prevTime; // then, in our time array, at the same point as our id, add the time elapsed as time that function states - previous time
            }
            stack.push(id); // then push our function ID to the stack
            prevTime = time; // and set time to start tracking again by setting previous time equal to the current time

        } else { // we hit an end
            const curr = stack[stack.length - 1]; // like above, get the most recent item in our stack
            timeArr[curr] += time - prevTime + 1; // in our time array, at the same point as our ID, att the time elapsed + 1 (+1 comes from it ending as our timestamps are inclusive i.e. if we start on 5 and end on 5, we took 1 time unit in this problem)

            stack.pop(); // since we have 'ended' this 'function', pop out the ID

            prevTime = time + 1; // increment time + 1 to account for it ending
        }
    }

    return timeArr;
};

// doing a line by line to really solidify this logic
// example: n = 1, logs = ["0:start:0", "0:end:2"]
// init state
// timeArr = [0], stack = [], prevTime = 0
// 0:start:0 -> stack is empty so we simply push the ID and set the previous time to the functions time, 0
// current state after first call
// timeArr = [0], stack = [0], prevTime = 0
// 0:end:2 -> we have 0 in stack, so we go to the timeArr at id location 0, and add the time (2) - our prevTime (0) + 1 (inclusive) and pop 0 out of our stack. increment prevTime as time ending (2) + 1 (inclusive because 0,1,2 have already been used to run function at currentID)
// current state after second call
// timeArr = [3], stack = [], prevTime = 3

// Example 1:
const n = 2
const logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]
// Output: [3,4]

// Example 2:
const n_2 = 1
const logs_2 = ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"]
// Output: [8]

// Example 3:
const n_3 = 2
const logs_3 = ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"]
// Output: [7,1]

console.log(exclusiveTime(n, logs));