// ref: https://www.youtube.com/watch?v=ENrzD9HAZK4
//========================================================================
// Section -1
// Node has a handful of built-in identifiers, console, global, process
// The most common one is console
console.log('Hello world');
// The second common one is global
// almost the same as the Window object for a front end developer
console.log(global.luckNum);
global.luckNum = '888';
console.log(global.luckNum);
// process can show a lot of useful information
console.log(process.platform);
//========================================================================

//========================================================================
// Section -2
// Event in NodeJs
// NodeJs is an asynchronous event-driven javaScript runtime
// EX1: run a callback function after an event occurs
process.on('exit', function (){
    // this will run after the exit
    console.log("The process has been exited!")
})

// EX2: Or we can define our own event:
// import EventEmitter
const {EventEmitter} = require('events');
// create an event holder object
const eventEmitter = new EventEmitter();
// set an event name to the event holder
eventEmitter.on('betweenStartAndEnd',() =>{
    console.log("The process is between start and end");
})
eventEmitter.emit('betweenStartAndEnd');
//========================================================================

//========================================================================
// Section -3
// File IO with Node
// Sync == Blocking
const{readFile, readFileSync} = require('fs');
const txt = readFileSync('./hello.txt');
console.log("This line will not show until the read file process finished");

// the non-blocking method
readFile('./hello.txt','utf8',(err,context)=>{
    console.log(context)
})
console.log("This line will  show before the read file process finished");
// use promises name space to avoid call-back hell
// const{readFile} = require('fs').promises;
// then use wait to resolve the promises here
// const file = await readFile('./hello.txt','utf8');
//========================================================================
//========================================================================
// Section -4
// Package management
// npm init -y
// npm install express
//========================================================================