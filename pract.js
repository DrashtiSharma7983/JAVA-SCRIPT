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