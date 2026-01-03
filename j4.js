// let hero = [34,45,46,65,66];
// console.log(hero);
// console.log(hero.length);


// let s = ["rahul","rohit"];
// console.log(s);
// console.log(typeof(s));


// let arr = [34,45,55,65];
// console.log(arr[0]);

// let h = ["rahul" , "rohit","ritik"];
// for(let i = 0;i<h.length;i++){
//   console.log(h[i]);
// }



// for (let i of h ){
//   console.log(i);
// }


// for (let i of h){
//   console.log(i.toUpperCase());
// }

// for(let i of h){
//   console.log(i.toLowerCase());
// }


// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for(let i of marks){
//   sum = sum + i;
// }

// let avg = sum / marks.length;
// console.log(`the avg marks of class = ${avg}`);



// let arr = [250 , 645 , 300 , 900 , 50];

// for(let i =0 ; i< arr.length;   i++){
//   let offer = arr[i] / 10;
//   arr[i] = arr[i] - offer ;
// }
// console.log(arr);


// let v  = ["tel", "high" , "rost", "yrt"];

// console.log(v.push("peet"));

// console.log(v.pop());


// let h = [34,454,567];
// let v = [3422,54,56];
// let res = h.concat(v);
// console.log(res);


// let  h = [ 453,456,65];
// let d= h.unshift(54);
// console.log(h);

// let s = h.shift();
// console.log(h);


// let a = [1,2,3,4,5,6,7];
// let s = a.splice(2,2,34,45);
// console.log(a);


let arr = ["bloomberg","microsoft","uber","google","ibm","netflix"];

let f = arr.shift();
console.log(arr);

let uo = arr.splice(1,1,"ola");
console.log(arr);

let a = arr.push("amazon");
console.log(arr);