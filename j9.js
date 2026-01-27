let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let winmessage = document.querySelector(".winmessage");
let winid = document.querySelector("#winid");


let turnO = true;

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

boxes.forEach((box) => {
  box.addEventListener("click",() => {
    
    if(turnO === true){
      box.innerText = "O";
      turnO = false;

    }
    else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});


const disablebtn = () => {
  for(let box of boxes){
    box.disabled = true;
  };
};

const showwinner = (winner) => {
  winid .innerText = `Congratulation '${winner}'!You Won`;
  winmessage.classList.remove("hide");
  disablebtn();
};

const checkwinner = () => {
  for (let pattern of winPattern){
    
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;

    if (pos0 != "" && pos1 != "" && pos2 != ""){
      if(pos0 === pos1 && pos1 === pos2){
        
        showwinner(pos0);
        
      };
    };
  };
};


const resetgame = () => {
  turnO = true;
  enablebtn();
  winmessage.classList.add("hide");
};

const enablebtn = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  };
};


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);