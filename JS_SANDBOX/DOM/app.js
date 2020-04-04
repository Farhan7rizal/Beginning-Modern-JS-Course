//*? DOM TYPES AND PROPERTY

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




/*
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
*/