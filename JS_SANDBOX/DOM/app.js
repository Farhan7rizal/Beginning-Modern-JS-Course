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
/*
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
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

//*? Target Item in single selector
// document.querySelector('li').style.color = 'red'; //* only get the firts one
// document.querySelector('ul li').style.color = 'blue'; //* only get the firts one

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //* only get the firts one
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; //* only get the firts one


//! ------------------------------------------------------------------------------
*/
/*
//! ------------------------------------------------------------------------------
//*! DOM SELECTOR FOR MULTIPLE ELEMENT
//* It return HTML collection which can be convert to an array and we can do certain thing like an array

//*? document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';
// items[2].innerHTML = 'Hello <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>';

//* with querySelector we can select not globaly but in specific because we select ul in querySelector
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


//*? document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

//*?Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li,index,array){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`
//   // console.log(array);
// });

// console.log(lis);

//*? document.querySelectorAll 
  //* return a NodeList ,textNodes , can do array method without convert it

  const items = document.querySelectorAll('ul.collection li.collection-item');

  // items.forEach(function(item, index){
  //   // console.log(item.className);
  //   item.textContent = `${index}: Hello`;
  // });

  // const liOdd = document.querySelectorAll('li:nth-child(odd)');
  // const liEven = document.querySelectorAll('li:nth-child(even)');

  // liOdd.forEach(function(li, index){
  //   li.style.background = '#ccc';
  // });

  // for(let i = 0; i < liEven.length; i++){
  //   liEven[i].style.background = '#f4f4f4';
  // };

  // console.log(items);

//! ------------------------------------------------------------------------------
*/
/*
//! ------------------------------------------------------------------------------
//*! TRAVERSING THE DOM
  //* Traverse basically move up and down , dealing with parent and children of specific node r what ever it is that we select 

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//*? take a look at different properties that are attached to these item or these node nad they have to do getting children and parent of these node

//*? Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//* 1	Element -	element name	null
//* 2	Attr -	attribute name	attribute value
//* 3	Text -	#text	content of node
//* 4	CDATASection -	#cdata-section	content of node
//* 5	EntityReference	- entity reference name	null
//* 6	Entity -	entity name	null
//* 7	ProcessingInstruction -	target	content of node
//* 8	Comment -	#comment	comment text
//* 9	Document -	#document	null
//* 10	DocumentType -	doctype name	null
//* 11 DocumentFragment -	#document fragment	null
//* 12	Notation - notation name

//*? Get Children Element Nodes
val = list.children;
val = list.children[0];
list.children[1].textContent= 'Hello';
//*? Get Children of Children
list.children[3].children[0].id = 'test-link'; //* Added id
val = list.children[3].children[0];

//*? Get first child and last child
val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount; //* count element child

//*? Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//*? Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


//*? Get Previous Sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;





  console.log(val);

//! ------------------------------------------------------------------------------
*/

//! ------------------------------------------------------------------------------
//*! CREATING ELEMENTS

//* Using const is fine because we are not re-assigning these variable (const) , we're adding stuff to them , like classes and id, or running method on properties on them, we're not declairing

//*? Create Element
const li = document.createElement('li');

//*? Add Class
li.className = 'collection-item';

//*? Add id
li.id = 'new item';

//*? Add Attribute
li.setAttribute('title', 'new Item');

//*? Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//*? Create a new link element
const link = document.createElement('a');
//*? Add classes 
link.className = 'delete-item secondary-content';
//*? Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//*? Append link into li
li.appendChild(link);

//*? Append li Child As Child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);


//! ------------------------------------------------------------------------------