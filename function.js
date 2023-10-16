function diceRoll(){
    let rslt = Math.floor(Math.random()*6)+1;
    console.log(rslt);
}
diceRoll();

//Print the table using function
function printTable(num){
    for(let i=num;i<=num*10;i=i+num){
        console.log(i);
    }
}
printTable(7);


//print age and name using argumens
function printInfo(name,age){
    console.log(`My name is ${name} and i am ${age} years old`);
}
printInfo("Drashti",24);


// write function to prnt average of three numbers
function avgCalc(a,b,c){
    let average = (a+b+c)/3;
    console.log(average);
}

avgCalc(10,10,10);

//write the function to add two numbers
function add(a,b){
    return(a+b);
}
let sum = add(10,5);
console.log(sum);