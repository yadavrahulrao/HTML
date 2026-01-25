// functions
// function hello(){
//   console.log("hello rahul");
//   console.log("this is a function");

// }

// hello();
// hello();



// function myfunction(msg){
  
// }

// console.log("hello");
// "abc".toUpperCase()
// "xyz".toUpperCase

// [1,2,3].push(4);



// function myfunction(msg,n){
//   console.log(msg*n);
// }
// myfunction("hello",100);



// function sum(x,y){
//   console.log(x+y);
// }


// function sum(x,y){
//   s = x+y;
//   console.log("before");
//     return s;
//   console.log("after");
// }
// let value = sum(3,4);
// console.log(value);


// function sum(a,b){
//   return a+b;
// }

// const arrowsum = (a,b) =>{
//   console.log(a+b);
// };



// function mul(a,b){
//   return a*b;

// }

// const arroemul = (a,b) => {
//   console.log(a*b);
// };


// const printhello = () =>{
//   console("hello");
// };


// function count_vowels(str){
//     let count = 0;
//   for(const char of str){
//     if(char === "a"|| char === "e"|| char === "i" || char === "o"  || char === "u"){
//       count ++;
//     }
//   }
//   console.log(count);
// }

// const count_vow = (str) => {
//     let count = 0;
//   for(const char of str){
//     if(char === "a"|| char === "e"|| char === "i" || char === "o"  || char === "u"){
//       count ++;
//     }
//   }
//   console.log(count);
// }


// function abc(){
//   console.log("hello");
// }

// function my(abc){
// return abc;
// }
// abc();


// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val);
// });


// let arr = [1,2,3,4,5,6];
// arr.forEach((val,idx,arr)=>{
//   console.log(val,idx,arr);
// });


// square of each no. in a array
// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val*val);
// });


// map 
// let arr = [1,2,3,4];
// arr.map((val)=>{
//   console.log(val);
// });


// let arr = [1,2,3,4,5];
// let newArr = arr.map((val)=>{
//   return val;
// });

// console.log(newArr);




// filter method
// let arr = [1,2,3,4,5,6];

// let newArr = arr.filter((val)=>{
//   return val % 2 === 0;
// });

// console.log(newArr);

// reduce
// let arr = [1,2,3,4];

// let i = 0;
// let sum = arr.reduce((accu,val)=>accu + val ,i ,);
// console.log(sum);

// let newARR = arr.reduce((res,val)=>{
//   return res+val ;
// });

// console.log(newARR);


// let arr = [1,234,4,55,,6,4];
// let newArr = arr.reduce((res,val)=>{
//   return res>val ? res : val ;
// });
// console.log(newArr);



// let marks = [12,78,93,56,78,90];
// let topper = marks.filter((val)=>{
//   return val > 90 ;
// });
// console.log(topper);


let n = prompt("enter a number :");
let arr = [];
for (let i = 1 ; i <= n ; i++){
  arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res,val)=>{
  return res+val;

});

console.log(sum);

let product = arr.reduce((res,val)=>{
  return res*val;
});
console.log(product);