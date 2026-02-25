// LC2694

// design an event emitter class. it should allow for subscribing to events and emitting them
// should have following 2 methods
// 1. subscribe: takes 2 arguments, name of even as string and callback function that will be called when emitted
// should have multiple listeners for same event, if multiple called should call in order
// array of results should be returned
// subscribe method should also return and object with an unusubscribe method that enables users to unsubscribe
// when it is called callback should be removed and undefined should be returned
// 2. emit: takes 2 arguments, name of event as string and optional array of arguments that will be passed to callbacks

class EventEmitter {
    // ok so the question is asking us to store information that emit can execute something stored and subscribe can read what that stored thing is to execute
    // so we need to store information, with a key (event name) and value (callback) pair aka an object
    constructor(data = {}) {
        this.data = data // empty object
    }

    // subscribe function
    subscribe(eventName, callback) {
        // store the event name and callback in an array since we can have multiple listeners for same event
        this.data[eventName] = this.data[eventName] || [] // if it already exists, it equals itself, else an empty array
        this.data[eventName].push(callback); // then push to this array
        return {
            unsubscribe: () => {
                // to unsubscribe, we want to remove the callback function so set the key equal to the array of callbacks filtered to only where the callbacks are equal
                this.data[eventName] = this.data[eventName].filter(cb => cb !== callback)
            }
        };
    }

    // emit function
    emit(eventName, args = []) {
        this.data[eventName].forEach(callback => {
            console.log(callback(...args))
        });
    }
}


const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit('onClick')); // []

// example 2
// const emitter2 = new EventEmitter();
// emitter2.emit("firstEvent"); // [], no callback are subscribed yet
// emitter2.subscribe("firstEvent", function cb1() { return 5; });
// emitter2.subscribe("firstEvent", function cb2() { return 6; });
// emitter2.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2