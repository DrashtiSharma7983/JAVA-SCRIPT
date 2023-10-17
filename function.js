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

//higher order function 
function multipleGreet(fun,n){
    for(let i=1;i<=n;i++){
        fun();
    }
}

let greet = function(){
    console.log("hello!");
}

multipleGreet(greet,10);

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