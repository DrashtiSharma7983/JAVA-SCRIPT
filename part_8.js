//map function

let arr =[2,4,3,1,7,5,6,9,3,4];

function num(n){
    console.log(n);
}
let myArr = arr.map(num);

//OR

let newArr = arr.map(function(el){
    return el;
});

//forEach method

let nums = [4,5,2,4,7,8];

function printEach(n){
    console.log(n);
}

nums.forEach(printEach);

//filter method

let num =[2,4,3,1,7,5,6,9,3,4];

let even = num.filter((el) =>(el%2==0));

let odd = num.filter((el) =>(el%2!=0));
