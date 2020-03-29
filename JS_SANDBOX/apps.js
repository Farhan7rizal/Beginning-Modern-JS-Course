//*! CONTENT
//*? SUB CONTENT
//* COMMENT
// COMMENT CODE
//@ i'am add this to settings.json
todo: this


// alert('Hi!');
// * Log to console
/* 
//! ------------------------------------------

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
 
//! ------------------------------------------
*/
/*
//!------------------------------------------
//*! variables are var, let, const

//*? VAR
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name); 
//*so we can re-assign variables with var, and let

//*Init variables
var greeting; //undefined
console.log(greeting);
greeting = 'Hello';
console.log(greeting); 
//*the reason we init var , for example for IF statement.

//*rule and convention in JS
//*this character are the only that can be inside of variable, letters, numbers, _, $
//*can not start with number

var firstName = "John"; //camel case
var first_name = 'Sara'; //Underscore
var FirsName = 'Tom'; //Pascal case


//*?LET
//*we do same as var

//*?CONST
    
const name = 'John';
console.log(name);
//*can not re-assign
//name = 'Sara';
//*Have to assign a value
//const greeting;

//*some people confuse when we use const with array , object and primitive data (string, number) thing can be change but can not re-assign 
//*create object literal
const person = {
    name:'John',
    age:30
}
//*in const we can not change a whole array, but data inside array it can
person.name = 'Sara';
person.age = 32;

// console.log(person);

const number = [1,2,3,4,5];
number.push(6);
//*push() is method to add on to the array
console.log(number);
//* using const unless i plan the value changing , unless i need to initialize it , iterator or loop. other than that using const, now that this value should not be re assign, it can mutate if it is an array or object , that make your code more secure , robust, more readable
*/
/*
//!------------------------------------------
//*! Data Types in JS

//*?String
const name = 'Seulgi';
//*?Age 
const age = 25;
//*?Boolean
const hasKid = false;
//*?Null
const boyFriend = null;
//*?Undefined
let redVelvet;
//*?Symbol
const sym = Symbol();

//*?REFERENCE TYPES - Objects

//*?Array
const hobbies = ['Dance', 'singing'];

//*?Object literals
const address = {
    city: 'Ansan',
    State: 'Gyeonggi-do,KR'
};

//*?Date
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

//! ------------------------------------------
*/

/*
//! ------------------------------------------
//*! Type Conversion

let val;

//*?Number to String
val = String(534);
val = String(4+4);

//*?Boolean to String
val = String(true);

//*?Date to String
val = String(new Date());

//*?Array to String
val = String([1,2,3,4]);

//*?toString()
val = 5;
// val.toString(); //that is WRONG
val = (5).toString();
val = (true).toString();

//*?String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3]);
num = '900.30';
val = parseInt(num); //Int does not have decimal
val = parseFloat('200.90');



//*Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
//*.length will only work on string
console.log(val.toFixed(2))

//*?Type coercion is when data type is different (string + number) JS will convert it to a String, and concatinate it
const val1 = 5;
const val2 = '6';
const sum = val1 + val2;
// const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

//! ------------------------------------------
*/
/*
//! ------------------------------------------
//*! Numbers and The Math Object
const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//*?Math Object
val = Math.PI; //phi
val = Math.E;   //2.7....
val = Math.round(2.2); //rounded
val = Math.ceil(2.4); //return greatest int
val = Math.floor(3.8); //return smallest int
val = Math.sqrt(64); //return the square of a number
val = Math.abs(-4); //return to positive number
val = Math.pow(2,8); //number^number
val = Math.min(2,4,6,7,1,-2); // return min number
val = Math.max(2,4,6,7,1,-9); // return max number
val = Math.random(); //return random number between 0 and 1.

val = Math.floor(Math.random() * 10 + 5); //it is gonna be 5 trough 10+5





console.log(val);

//! ------------------------------------------
*/

/*
//! ------------------------------------------
//*! String Methods and concatination

const firstName = 'William';
const lastName = 'Vengeance';
const age = 24;
const str = 'Hello there my name is William';
const tags = 'web design,web development,programming'

let val;

val = firstName + lastName;

//*?Contacenation
val = firstName +' '+ lastName;

//*?Append
val = 'Yami ';
val += 'Sukehiro';

val = 'Hello my name is '+ firstName +'and I am '+age;
//*?Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

//*?Length
val = firstName.length;

//*?concat()
val = firstName.concat(' D ', lastName);

//*?Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//*?get Index
val = firstName[3];

//*?indexOf() William
val = firstName.indexOf('l');
val = firstName.lastIndexOf('z');
    //*if we seraching in indexOf() and the car is not there, it return -1 by default

//*?charAt(), is opposite of indexOf()
val = firstName.charAt(3);
//*?Get last char
val = firstName.charAt(firstName.length - 1);

//*?substring()
val = firstName.substring(0, 4); //output Will

//*?slice() similiar to substring()
    //*slice() is mostly used with array to pull things out of arrays
val = firstName.slice(0, 4);
val = firstName.slice(-3); // it will start from back

//*?split() by separator to an array
val = str.split(' ');
val = tags.split(',');

//*?replace()
val = str.replace('William', 'Yami');

//*?includes() return true or false, that if includes or not
val = str.includes('Hello');


console.log(val); 




//! ------------------------------------------
*/
// ! It done
/*
//! ------------------------------------------
//*! Template literals

const name = 'Yein';
const age = 23;
const job = 'Singer';
const city = 'South Korean';

let html;

//*?Without template string (ES5)

html =  '<ul>' +
        '<li>Name: '+ name +'</li>'+
        '<li>Age : '+ age +'</li>'+
        '<li>Job : '+ job +'</li>'+
        '<li>City : '+ city +'</li>'+
        '</ul>';

//*?With template string (ES6)

function hello(){
    return 'Anyeong!';
}
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 - 2}</li>
        <li>${hello()}</li>
        <li>Ternary Operator: ${age > 30 ? 'Over 30' : 'Under 30'}</li> 
    </ul>
`;
document.body.innerHTML = html;





//! ------------------------------------------
*/
/*
//!------------------------------------------
//*! Array and Array Methods

//* Array is very important , they allow store multipple values in one variable , they can be mutated and and iterated through and they can be used in some COMPLEX ALGORITHM

//*?create by []
const numbers = [43,56,33,23,44,36,5]; 
//*?Create by array contructor or array object
const numbers2 = new Array(22,45,33,76,54);
const numbers3 = new Array(-1,0,1);
//* Both of that is an array

//*?Array of string
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
//*?Array of Mix
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:1}, new Date()];


let val;


//*? Get array of length
val = numbers.length;
//*? Check if is array
val = Array.isArray(numbers);
// val = Array.isArray('hello'); //is False
//* it is usefull when dealing with the DOM, because we can return for instance a NODE LIST from the DOM , which is structured like an array BUT is not an actual array so we CAN'T do certain things like FOR EACH LOOP , so it's a good way , and you can convert it into array if you need

//*? Get a single value
val = numbers[3];

//*? Insert nto array
numbers[2] = 100; //*replaces index no 2

//*? Find index of value
val = numbers.indexOf(36);


//*? MUTATING ARRAYS

//*? add on to end
numbers.push(250);

//*? add on to front
numbers.unshift(120);

//*? Take of from end
numbers.pop();

//*? take off from front
numbers.shift();

//*? Splice values
numbers.splice(0,0);
//* numbers.splice(1,1); //take one array in one position, 0,0 didn't work
//* numbers.splice(0,1); //take array , start from and end from 2d

//*? Reverse values
numbers.reverse();
//* numbers.splice(0,2); //Splice also work with reverse
//* numbers.reverse() //revers and reverse can delete from end

//*? Concatenate array
val = numbers.concat(numbers2, numbers3);

//*? Sorting array
val = fruit.sort(); //alphabetical order
val = numbers.sort(); //it's sorting the first number in digit 100,23,36,...

//*? To Sorting number Use "compare function"
val = numbers.sort(function(x, y){
    return x - y;
});

//*? Reverse Sorting
val = numbers.sort(function(x, y){
    return y - x;
});
//* OR use
// val = numbers.reverse();

//*Find
function under50(num){
    return num < 50;
    //*return first number under 50
}
function over50(num){
    return num > 50;
    //*return first number under 50
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);




//!------------------------------------------
*/
/*
//!------------------------------------------
//*! Object Literals

//*?This refers to Object Literals
const person = {
    firstName: 'Seo',
    lastName: 'Jisoo',
    age: 26,
    email: 'SeoJisoo@gmail.com',
    hobbies: ['drawing','dance','acting'], //array
    address: { //embedded object
        city: 'KR',
        state: 'Incheon'
    }, 
    getBirthYear: function(){
        //*when inside object in function we need use this keyword
        return 2020 - this.age;
    }
}

let val;

val = person;

//*Get specific name
val = person.firstName;
//*Or
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Seo Jisoo', age: 26},
    {name: 'Jeong Yein', age: 22},
    {name: 'Lee Mijoo', age: 26}
];
//*loop through array
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

//!------------------------------------------
*/
/*
//!------------------------------------------
//*! Dates and Time

let val;

const today = new Date();
//*change it to different date
let birthday = new Date('1-1-1994 11:25:00');
birthday = new Date('feb 10 2020');
birthday = new Date('1/1/2020');

//val = birthday; //* this is object type
// val = today.toString();
val = today.getMonth(); //it zero base, so jan is 0, feb is 1, so on
val = today.getDate();
val = today.getDay();//it 0-6 numerical days, sun 0 , mond 1, tue 2, wed 3, thu 4, fri 5, sat 6
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(4);
birthday.setFullYear(1999);
birthday.setHours(13);
birthday.setMinutes(7);
birthday.setSeconds(43);

console.log(birthday);


//!------------------------------------------
*/
/*
//!------------------------------------------
//*! If Statements and Comparison Operators

//*?If statement is use to evaluate some kind of condition and do something base on that condition or something else if that condition is not met

// if(something){
//     do something
// } else {
//     do something else
// }

// = is assigning, == is compairing

// const id = 100; 

// //*? EQUAL TO
// if(id == 101){
//     //* == ,it does not matter if it a string or number
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //*? NOT EQUAL TO
// if(id != 100){
//      //*. != it does not matter if it a string or number
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //*? EQUAL TO VALUE and Type
// if(id === '100'){
//     //* === it matter, use it to avoid issues
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //*? NOT EQUAL TO VALUE and Type
// if(id !== '100'){
//     //* .!== it matter, use it to avoid issues
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //*? To know that variable is define or undefined, if just if(id){...}
// if(typeof id !== 'defined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// //*? GREATER THAN OR LESS THAN
// if(id >= 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //*? IF ELSE

// const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red')
// } else if(color === 'blue') {
//     console.log('color is blue')
// } else {
//     console.log('color is not blue or red')
// }

//*? LOGICAL OPERATOR
//* if you wanna test more tha one things , we can use this operator

const name = 'Seulgi';
const age = 20;

//* AND && is when both two is true
if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is a adult`)
}

//* OR || , when is one of the condition is true

if (age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else {
    console.log(`${name} is registered on a race`)
}

const id = 100;

//* TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//* WITHOUT BRACES
if(id === 100) 
    console.log('CORRECT'); 
else 
    console.log('INCORRECT');



//!------------------------------------------
*/
/*
//!------------------------------------------
//*! Switches

const color = 'yellow';
//* use switch when the case is a lot, rather use if else, if else and so on
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;

}

switch(new Date().getDay()){
    case 0:
        day = 'Ahad';
        break;
    case 1:
        day = 'Senin';
        break;
    case 2:
        day = 'Selasa';
        break;
    case 3:
        day = 'Rabu';
        break;
    case 4:
        day = 'Kamis';
        break;
    case 5:
        day = 'Jum\'at';
        break;
    case 6:
        day = 'Sabtu';
        break;
}

console.log(`Sekarang Hari ${day}`);

//!------------------------------------------
*/

/*
//!------------------------------------------
//*! FUNCTION DECLARATION AND EXPRESSIONS

//*? FUNCTION DECLARATIONS
//* Greet and Greet2 it is different
function greet(firstName = 'Kang', lastName = 'Seulgi'){
    //* In function we can attach a parameter (also call argument)
    //* We can also make the parameter by default, with es5, so when it is parameters is empty/undefined so we can return default value
    //* Better way is by es6, with simple (=) in the parameter

    // if(typeof firstName === 'undefined'){firstName = 'Kang'}
    // if(typeof lastName === 'undefined'){lastName = 'Seulgi'}
    console.log('Hello! ' + firstName +' '+lastName);
}
function greet2(){
    // console.log('Hello!');
    return 'Hello!';
}
// greet();
// console.log(greet2());

//*? FUNCTION EXPRESSIONS
//* Function expressions is basically, putting a function as  varibale assignment, for example

const square = function(x = 3){
    //* Function expression is can be name or anonymous, usually they anonymous 
    return x*x;
}; 
//* Put a semicolon because this is basically a varible 

// console.log(square());

//*?IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIEFs

// (function(){
//     console.log('IIFEs Ran..');
// })();

(function(name){
    console.log('IIFEs Ran..'+' '+name);
})('Brad');
//* This are very useful when it comes to certain design patterns like the module pattern ...

//*? PROPERTY METHOD
//* We can put function inside of objects as well as opposed to just in the global scope 
//* When a function is put inside of an object it's called a method

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

//* We can also define function for this object outside of this 

todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(1);
todo.delete();

//!------------------------------------------
*/
/*
//!------------------------------------------
//*! FUNCTION DECLARATION AND EXPRESSIONS
//* Loop is an instruction that repeat those specific condition is reached. 
//* Loop are use to run the same block of code using different values each time 

//*? FOR LOOP
for(let i = 0; i < 10; i++ ){
    //* You can't use const inside a loop, because it is gonna be change
    //* i++ === i = i + i
    //* if you want a specific iteration, with another value, use if
    if(i === 2){
        console.log('2 is my favorite number');
        continue; //* is gonna stop the loop here and just go next iteration, so number 2 is no longer include or without continuing after that if statement
    }

    //*Break, is 
    if(i === 3){
        console.log('Stop the loop')
        break;
    }
    console.log('Number ' + i);
}

//*? WHILE LOOP
    //* Use for loop when you know how many time it is gonna run, how many iterations you gonna have, and use while lopp when you dont, when it's unclear

let x = 0;

while(x < 2){
    // if(x === 3){
    //     console.log('3 is number');
    //     continue;
    // } //* Do not try this if code inside while, it will loop infintely
    console.log('Number ' + x);
    x++;
}

//*? DO WHILE 
    //* do while, it it is always going to run , at least one loop
let i = 100;
do {
    console.log('Nomor '+ i);
    i++;
}

while(i < 10); //* the condition is does not met, but it run once

//*? LOOP THROUGH ARRAY
//* with for loop

const cars = ['ford', 'chevy', 'honda', 'toyota'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//*? FOREACH ARRAY LOOP
cars.forEach(function(car, index, array){
    //* function takes 3 parameters : value or iterator, index and the actual array, the entire array
    console.log(`${index} : ${car}`);
    // console.log(array);
});

//*? MAP
const users = [
    {id: 1, name:'Kei'},
    {id: 2, name:'Baby Soul'},
    {id: 3, name:'Fennec Fox'},
    {id: 4, name:'Gorani'}
];
const ids = users.map(function(user){
    //* take this array of object, and create an array of the ids
    return user.id; //* return each id inside of an array
});

console.log(ids);

//*? FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}


for(let x in user){
    //* it just take one object, not many object
    // console.log(x);
    console.log(`${x} : ${user[x]}`);
}

//!------------------------------------------
*/
/*
//!------------------------------------------
//*! FUNCTION DECLARATION AND EXPRESSIONS
//*? TAKE A LOOK AT THE WINDOW OBJECT
    //* Because DOM is the part of the window object as with many other things, the window is the global object in client side JS

//*? WINDOW METHOD / OBJECTS / PROPERTIES
// window.console.log(123);

//*? ALERT
// window.alert('Hello World!');

//*? PROMPT
// const input = prompt();
// alert(input);

//*? CONFIRM
// if(confirm('are you sure')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

//*? Outter height and width
    //* from upper to bottom 
val = window.outerHeight;
val = window.outerWidth;

//*? Outter height and width
    //* from upper to bottom in scrool bar
val = window.innerHeight;
val = window.innerWidth;

//*? Scroll points
val = window.scrollY;
val = window.scrollX;

//*? Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//*? Redirect
// window.location.href = 'http://google.com';

//*? Reload
// window.location.reload();

//*? History Object
// window.history.go(-3);
val = window.history.length;

//*? Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.languages;

console.log(val);

//!------------------------------------------
*/

//!------------------------------------------
//*! 
//*? 


//!------------------------------------------