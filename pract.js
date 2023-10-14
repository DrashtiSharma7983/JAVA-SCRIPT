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