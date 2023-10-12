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

