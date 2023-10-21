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


//print the sum from 1 to n
function sum(n){
    sum = 0;
    for(let i=0;i<=n;i++){
        sum +=i;
    }
    return sum;
}
console.log(sum(15));
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

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica"

let country=["Australia","Germany","UnitedStatesofAmerica","i loe to learn new things daily."];
function logestName(country){
    let count = 0;
    for(let i=0;i<country.length;i++){
        let ansLen= country[count].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            count = i;
        }
    } return country[count];
}
logestName(country);

//Qs4.Write a JavaScript function to count the number of vowels in a String argument.
let str = "ilovemyplace";

function countVowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(
            str.charAt(i) == 'a'||
            str.charAt(i) == 'e'||
            str.charAt(i) == 'i'||
            str.charAt(i) == 'o'||
            str.charAt(i) == 'u'
        ){
            count ++;
        }
    }
    return count;
}

//Qs5.Write a JavaScript function to generate a random number within a range(start,end)

function randNum(start,end){
    for(let i=start;i<=end;i++){
        let ans = Math.floor(Math.random()*end)+1;
        console.log(ans);
    }
}

randNum(80,100);
