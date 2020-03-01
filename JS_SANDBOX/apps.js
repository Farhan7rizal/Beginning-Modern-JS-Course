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
/*
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
*/
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

//Find
function under50(num){
    return num < 50;
    //return first number under 50
}
function over50(num){
    return num > 50;
    //return first number under 50
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);




//!------------------------------------------
