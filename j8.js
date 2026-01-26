// let btn = document.querySelector("#btn");
// btn.onclick = (e) => {

//   console.log(e);
//   // console.log("btn was click ");
//   // let a = 25;
//   // a++;
//   // console.log(a);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
// };

// btn.addEventListener("click",(e) => {
//   console.log("btn 1 clicked-hand 1");
//   console.log(e);
// });

// btn.addEventListener("click",() => {
//   console.log("btn next- hand 2 ");
// });

// const hand3 = ()=>{
//   console.log("btn next- hand 3 ");
// };
// btn.addEventListener("click",hand3);


// btn.addEventListener("click",() => {
//   console.log("btn next- hand 4");
// });

// btn.removeEventListener("click",hand3);



let modbt = document.querySelector("#mode");
let curmod = "light-mode";

modbt.addEventListener("click",()=>{
  console.log("trying to change mode");
  if(curmod === "light-mode"){
    curmod = "dark";
    document.querySelector("body").style.backgroundColor = "black";

  }
  else{
    curmod = "light-mode";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(curmod);
});