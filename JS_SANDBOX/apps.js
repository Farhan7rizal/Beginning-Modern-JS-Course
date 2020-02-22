// alert('Hi!');
// Log to console
// ------------------------------------------
/* 
console.log('this is console log from source code');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]); //array
console.log({a:1, b:2}); //object
console.table({a:1, b:2}); //table

console.error('this is some error');
console.clear();
console.warn('this is a waring!');
console.time('hello');
    console.log(123);
console.timeEnd('hello');
*/ 
// ------------------------------------------

// variables are var, let, const
// ------------------------------------------
/*
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name); 
// so we can re-assign variables with var, and let

//Init variables
var greeting; //undefined
console.log(greeting);
greeting = 'Hello';
console.log(greeting); 
//the reason we init var , for example for IF statement.

//rule and convention in JS
//this character are the only that can be inside of variable, letters, numbers, _, $
//can not start with number

var firstName = "John"; //camel case
var first_name = 'Sara'; //Underscore
var FirsName = 'Tom'; //Pascal case
*/
// ------------------------------------------

// LET
//we do same as var

//CONST
    
// const name = 'John';
// console.log(name);
//can not re-assign
// name = 'Sara';
//Have to assign a value
// const greeting;

// ------------------------------------------
/*
//some people confuse when we use const with array , object and primitive data (string, number) thing can be change but can not re-assign 
//create object literal
const person = {
    name:'John',
    age:30
}
//in const we can not change a whole array, but data inside array it can
person.name = 'Sara';
person.age = 32;

// console.log(person);

const number = [1,2,3,4,5];
number.push(6);
//push() is method to add on to the array
console.log(number);
//using const unless i plan the value changing , unless i need to initialize it , iterator or loop. other than that using const, now that this value should not be re assign, it can mutate if it is an array or object , that make your code more secure , robust, more readable

//Data Types in JS

//String
const name = 'Seulgi';
//Age 
const age = 25;
//Boolean
const hasKid = false;
//Null
const boyFriend = null;
//Undefined
let redVelvet;
// Symbol
const sym = Symbol();

//REFERENCE TYPES - Objects
//Array
const hobbies = ['Dance', 'singing'];
// Object literals
const address = {
    city: 'Ansan',
    State: 'Gyeonggi-do,KR'
};

//Date
const today = new Date();



console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKid);
console.log(typeof boyFriend);
console.log(typeof redVelvet);
console.log(typeof sym);

console.log(typeof hobbies);
console.log(typeof address);
console.log(today);
console.log(typeof today);
console.log();
*/
// ------------------------------------------


