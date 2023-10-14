let arr = [["Ram","Shyam","Geeta"],["Gauri","Kmkum","Jhanvi"]];

for(let i=0;i<arr.length;i++){
    console.log(i,arr[i]);
    for(let j=0;j<arr[i].length;j++){
        console.log(`j=${j}, ${arr[i][j]}`);
    }
}