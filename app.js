function getSum(n){
    let rslt=0;
    for(let i=1;i<=n;i++){
        rslt +=rslt;
    }
    return rslt;
}
let finl = getSum(3);
console.log(finl);