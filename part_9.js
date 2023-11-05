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
let btn = document.createElement('button');

let btn1 = document.querySelector("button");
console.dir(btn1);
btn1.innerText = "click me!";

let body = document.querySelector("body");
body.appendChild(btn1);