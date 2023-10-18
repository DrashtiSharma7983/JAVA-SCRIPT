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