let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click",function(){
    //console.log("button clicked.");
    //console.log(inp.value);
    
    let litems = document.createElement("li");
    litems.innerText = inp.value;
    console.log('item created');
    ul.appendChild(litems);
    inp.value = "";

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    litems.appendChild(delbtn);
})