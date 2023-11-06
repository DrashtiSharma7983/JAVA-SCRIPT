//getElementById
let desc = document.getElementById("description");
console.log(desc);

//getElementsByClassName
let imgObj = document.getElementsByClassName("oldImg");
console.log(imgObj);
console.dir(imgObj);
imgObj.src;

//query selector
let h1obj = document.querySelector('h1');
console.log(h1obj);

let pobj = document.querySelectorAll('p');
console.log(pobj);

//Practice Qs
//1. a <p> with red text that says "Hey i am red!"
let para = document.createElement('p');
para.innerText = "Hey I am red!";

//let body = document.querySelector('body');
body.append(para);
para.classList.add('red');

//2. an <h3> with blue text that says "Hey i am blue h3!"

let h3 = document.createElement('h3');

h3.innerText = "Hey i am a blue h3!";

let body = document.querySelector("body");

body.append(h3);
body.classList.add('blue');

//3
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = "I am in a div";
p.innerText = "ME TOO";

div.append(h1);
div.append(p);

div.classList.add("box");

let bdy = document.querySelector('bdy');

bdy.append(div);

//Assignment Q1
let inp = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me!";

let body = document.querySelector("body");
body.append(inp);
body.append(btn);

//Assignment Q2
let bttn = document.querySelector("button");
bttn.setAttribute('id','btn');





