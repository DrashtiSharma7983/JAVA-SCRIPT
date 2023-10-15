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
    }
    else{
        guess = prompt("sorry! please try again");
    }
}