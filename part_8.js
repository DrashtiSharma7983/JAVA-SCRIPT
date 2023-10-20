//map function

let arr =[2,4,3,1,7,5,6,9,3,4];

function num(n){
    console.log(n);
}
arr.map(num);

//OR

arr.map(function(el){
    console.log(el);
});