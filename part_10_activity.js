let btn = document.querySelector('button');


btn.addEventListener("click",function(){
    let h1 = document.querySelector('h1');
    let randomColor = getRandomColor();
    h1.innerText = randomColor;
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
}); 

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color =`rgb(${red}, ${green}, ${blue})`;
    return color;
}

//html or css code
//  <h1>Generate a random color</h1>
//     <button>Generate Color</button>
//     <br><br>
//     <div>This is your new color.</div>

 
//----css-----
//  *{
//     text-align: center;
// }
// div{
//     height: 200px;
//     width: 800px;
//     border: 1px black solid;
//     margin: auto;
// }

// another small activity
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');
// let btn = document.querySelector('button');

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "purple";
// }

// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

//click or mouse
let btn = document.querySelector('button');
let inp = document.querySelector('input');

btn.addEventListener("click",function(event){
    console.log(event);
});

inp.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key was pressed");
})

//other scenario
let form = document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    let inp = document.querySelector('input');
    console.dir(inp);
    console.log(inp.value);
})