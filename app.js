// JS(Part3)PracticeQuestionsQs1.WriteaJavaScriptprogramtogetthefirstnelementsofanarray.
// [ncanbeanypositivenumber].
// Forexample:forarray[7,9,0,-2]and n=3Print,[7,9,0]

// let arr = [7,9,0,-2];
// let n = 2;
// ans = arr.slice(0,n);
// console.log(ans);

// Qs2.WriteaJavaScriptprogramtogetthelastnelementsofanarray.[ncanbeanypositivenumber].
// Forexample:forarray[7,9,0,-2]andn=3Print,[9,0,-2]
let arr = [7,9,0,-2];
let n= 3;
ans = arr.slice(arr.length-n);
console.log(ans);