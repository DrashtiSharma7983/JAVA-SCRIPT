//Trafic light system
let color = "yellow";
if(color == "red"){
    console.log("Please stop");
}
if(color == "yellow"){
    console.log("Please slow down");
}
if(color == "green"){
    console.log("Please go");
}

//week days program

let day = "8";
switch(day){
    case "1":
        console.log("Monday");
            break;
    case "2":
        console.log("Tuesday");
        break;  
    case "3":
        console.log("Wednesday");
        break; 
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day");
}


//Alert & Prompts
let firstname = prompt("Enter your firstname");
let lastname = prompt("Enter your lastname");
console.log("Welcome" , firstname ," " ,lastname, "!");

//Q1-------------
// let num = 57;
// if (num % 10 ==0){
//     console.log("num is divisible by 10");
// }
// else{
//     console.log("num is not divisible by 10");
// }

// //Q2----------
// let age = prompt("Enter your age");
// let myname = prompt("Enter your name");
//alert(`${name} is ${age} years old.`)
// console.log(myname ,"is" ,age, "years old.");

// //Q3
// let qtr = 4;
// switch(qtr){
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
// }

// //Q4
// let str = "am";
// if (((str[0] == "A") || (str[0] === "a")) && (str.length > 5)){
//     console.log("It is a good string");
// }
// else{
//     console.log("It is not a good string");
// }

// JS(Part3)PracticeQuestionsQs1.WriteaJavaScriptprogramtogetthefirstnelementsofanarray.
// [ncanbeanypositivenumber].
// Forexample:forarray[7,9,0,-2]and n=3Print,[7,9,0]

// let arr = [7,9,0,-2];
// let n = 2;
// ans = arr.slice(0,n);
// console.log(ans);

// Qs2.WriteaJavaScriptprogramtogetthelastnelementsofanarray.[ncanbeanypositivenumber].
// Forexample:forarray[7,9,0,-2]andn=3Print,[9,0,-2]
// let arr = [7,9,0,-2];
// let n= 3;
// ans = arr.slice(arr.length-n);
// console.log(ans);


//Qs3.WriteaJavaScriptprogramtocheckwhetherastringisblankornot

// let str = "Drashti";
// if(str.length === 0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

//Qs4.WriteaJavaScriptprogramtotestwhetherthecharacteratthegiven(character)indexislowercase.

// let str = "DrAsHtiShArma";
// let indx = 5;
// if(str[indx]==str[indx].toLowerCase()){
//     console.log("Character is in lower case");
// }
// else{
//     console.log("Character is not in lower case");
// }


// Qs1.WriteaJSprogramtodeletealloccurrencesofelement‘num’inagivenarray.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2Resultshouldbearr=[1,3,4,5,6,3]
let arr=[1,2,3,4,5,6,2,3];
let num=2;
 for (let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
 }
 console.log("result is : ",arr);


 // Qs2.Write aJS program to find the no of digits in a number
// Example:ifnumber=287152,count=6

let number = 287152756524352;
let count = 0;
let copy = number;

while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);


//generate a random number btw 1 and 100
let num = Math.floor(Math.random()*100)+1;
console.log(num);

//generate a random number btw 1 and 5
let num = Math.floor(Math.random()*5)+1;
console.log(num);

//generate a game using random number.
const num = prompt("enter your number");

const random = Math.floor(Math.random()*num) +1;

let guess = prompt("guess random number");

while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    if(guess == random){
        console.log("you are right! Congrats!! number is",random);
        break;
    }else if(guess < random){
        guess = prompt("hint: your number is small. please try again");
    }
    else{
        guess = prompt("hint: your number is large. please try again");
    }
}

//create anobject
const person={
    name:"Drashti",
    age:24,
    city:"Gurgaon"
}
person.city="Delhi";

person.country="India";
console.log(person);