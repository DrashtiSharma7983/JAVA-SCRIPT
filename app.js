let btns = document.querySelectorAll('button');

for(btn of btns){
    btn.onclick = sayHello;
}
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked.");
//     alert("button was clicked.");
// }
function sayHello(){
    alert("button was clicked.");
}