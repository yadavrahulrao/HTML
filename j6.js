// DOM 

// console.log("hello");
// console.log(window.document);

// console.dir(document);

// console.log(document.body);


// let heading = document.getElementById("heading");

// console.dir(heading);

// let head2 = document.getElementById("head2");
// console.dir(head2);

// let rao = document.getElementsByClassName("rao");
// console.dir(rao);


// let para = document.getElementsByTagName("p");
// console.dir(para);

// first element 
// let a = document.querySelector("p");
// console.dir(a);


// all elelments

// let s = document.querySelectorAll("p");
// console.dir(s);

// let s = document.querySelectorAll("p");
// // console.dir(s);


// console.dir(document.body);
// console.dir(document.getElementsByTagName("h2"));

// concatenate
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "by the rahul";

let divs = document.querySelectorAll(".box");
// console.dir(divs[0]);

let idx = 1
for (div of divs){
  div.innerHTML = `new value ${idx}`;
  idx ++;
}

// divs[0].innerHTML = "new value 1";
// divs[1].innerHTML = "new value 2";
// divs[2].innerHTML = "new value 3";

