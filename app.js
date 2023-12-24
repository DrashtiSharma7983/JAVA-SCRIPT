async function greet(){
    //throw "page not found";
    return "hello!";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result is:", result);
})

.catch((err)=>{
    console.log("promise was rejected with error:", err);
});