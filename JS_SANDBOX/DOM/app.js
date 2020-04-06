/*
//! ------------------------------------------------------------------------------
//*! DOM TYPES AND PROPERTY

let val;

val = document;
val = document.all;
val = document.all[1]; //*take a list in order each element
val = document.all.length; //*count all element in a doom
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//*? WE CAN ACTUALLY SELECT STUFF WITHOUT USING SELECTOR
  //* it is not recomended but it is possible 

//* For example, we can get HTML collection
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[1];

val = document.images;

val = document.scripts;
val = document.scripts[1].getAttribute('src');

//* HTML collection if you want to , turn in into an array , so you can use thing like for each, which you can not by default use collection
let scripts = document.scripts;

// scripts.forEach(function(script){
//   console.log(scripts);
// }); //* it does not work because forEach is for array only

let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});


console.log(val);
//! ------------------------------------------------------------------------------
*/

//! ------------------------------------------------------------------------------
//*! DOM SELECTOR FOR SINGLE ELEMENT

//* in vanilla JS couple different selector that can be catogorized into different types , single and multiple elements selector. Single elements allow you to grab one element by it is id , class and ext, and grab single first one. Multiple elements get all of the elements with that class and return in each HTML collection or node list deppending on on which selector you use

//*? document.getElementById()

// console.log(document.getElementById('task-title'));

//*? Get thing from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

//* Better to make it as variable
// const taskTitle = document.getElementById('task-title');

//*? Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

//*? Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span style="color:red">Task list</span>';

//*? Query Selector / document.querySelector 
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

//*? Target Item in single selector
document.querySelector('li').style.color = 'red'; //* only get the firts one
document.querySelector('ul li').style.color = 'blue'; //* only get the firts one

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //* only get the firts one
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; //* only get the firts one


//! ------------------------------------------------------------------------------
