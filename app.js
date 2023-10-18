//print age and name using argumens
function printInfo(name,age){
    console.log(`My name is ${name} and i am ${age} years old`);
}
printInfo("Drashti",24);

function diceRoll(){
    let rslt = Math.floor(Math.random()*6)+1;
    console.log(rslt);
}
diceRoll();

//Qs1.Write a JavaScript function that returns array elements larger than a number.

let elements = [50,30,25,70];
let num = 25;

function largeNum(arr,n){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}

largeNum(elements,25);