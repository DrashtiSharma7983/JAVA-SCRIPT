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