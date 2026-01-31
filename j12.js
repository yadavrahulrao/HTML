// function hello(){
//   console.log("hello");
// }




// setTimeout(hello,5000);



// setTimeout(()=>{
//   console.log("hello");

// },4000);


// function sum(a,b){
//   console.log(a+b);
// }
// function calcu (a,b,sumCallback){
//   sumCallback(a,b);
// }



// const hello = () => {
//   console.log("hello");
// }

// setTimeout(hello,3000);


// function getdata(dataid,getnext){
//   setTimeout(()=>{
//     console.log("dataid",dataid);
//     if(getnext){
//       getnext();
//     }
//   },2000);
  
// }

// callback hell

// getdata(1,()=>{
//   getdata(2,()=>{
//     getdata(3,()=>{
//       getdata(4);
//     });
//   });
// });


// let promise = new Promise((resolve, reject) => {
//   console.log("i am a promise");
//   resolve("uccess");
//   reject("some error");
// })


// function getdata(dataid,nextdata){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log(dataid);
//       // resolve =("success")

//       reject("error");
//       if(nextdata){
//         nextdata();
//       }
//     }, 5000);
//   });
// };


const getPromise = ()=>{
   return new Promise((resolve, reject) => {
    console.log("promise");
    // resolve("sucess");

    reject("error");
  });
};

let promise = getPromise();
promise.then(()=>{
  console.log("fullfilled");
});

promise.catch(()=>{
  console.log("reject");
});