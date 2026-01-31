// direct way to create an object

// const student = {
//   fullname : "rahul",
//   marks : 99,
//   printmarks :function(){
//     console.log(this.marks);
//   },
// };


// const employee = {
//   calTax1(){
//     console.log("tax rate is 10%");
//   },
//   calTax2:function(){
//     console.log("tax rate is 10%");
//   },
// };

// const rahul = {
//   salary: 50000,
// };

// rahul.__proto__ = employee;



// class toyata {
//   constructor(){
//     console.log("create new object");
//   }
//   start(){
//     console.log("start");
//   }

//   stop(){
//     console.log("stop");
//   }

//   setbrand(brand){
//     this.brand = brand;
//   }
// };

// let fortuner = new toyata();
// fortuner.setbrand("fortuner");



// class parent{
//   hello(){
//     console.log("hello");

//   }
// }

// class child extends parent{

// }

// let obj = new child();



// class person {
//   eat(){
//     console.log("eat");
//   }
//   sleep(){
//     console.log("sleep");
//   }
// }

// class engineer extends person {
//   work(){
//     console.log("in industry");
//   }
// }

// let obj = new engineer();



// class person{
//   constructor(){
//     console.log("child");
//     this.species = "ano";
//   }
//   eat (){
//     console.log("eat");
//   }
  

// }

// class engineer extends person{
//   constructor(branch){
//     console.log("child1");
//     super()  // to invoke parent class constructor
//     this.branch = branch;
//     console.log("child2");
//   }
//   work(){
//     console.log("problems");
//   }
// }

// let obj = new engineer("it");



// let data = "information"

// class user {
//   constructor(name,email){
//     this.name = name;
//     this.email = email;
//   }

//   viewdata(){
//     console.log("data:",data);
//   }
//   // name(){
//   //   console.log("rahul");
//   // }
//   // email(){
//   //   console.log("yar83031@gmail.com");
//   // }
// }

// class admin extends user {
//   constructor(name,email){
//     super(name,email);
//   }
//   editdata (){
//     data = "new data"
//   }
// }

// // let student = new user("rahul","yar83031@gmail.com");


// let admin1 = new admin("rhaul","yar@gmail.com");




let a = 5;
let b = 10;
console.log(a);
console.log(b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
try{
  console.log(a+c);

}catch(err){
  console.log(err);
}

console.log(a+b);
console.log(a+b);
console.log(a+b);