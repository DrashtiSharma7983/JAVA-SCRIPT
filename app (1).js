let para = document.createElement('p');
para.innerText = "Hey I am red!";

let body = document.querySelector('body');
body.append(para);
para.classList.add('red');