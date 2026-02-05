'use strict';

export const animalArray = ["dog", "cat", "goldfish"];

export default function otherfunction() {
    console.log("This is otherfunction from index.js");
}

console.log("I'm the index.js file!");

console.log("animalArray: ", animalArray);



// // named import example:
// import {otherMessage, otherFunc} from './other.js';

// console.log("otherMessage: ", otherMessage);

// otherFunc();


// // default import example:
// import otherFunc from './other.js';
// import {otherMessage} from './other.js';

// console.log("otherMessage: ", otherMessage);

// otherFunc();

