let score_user = 0;
let score_bot = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const parascore_user = document.querySelector("#score_user");
const parascore_bot = document.querySelector("#score_bot");

const getbotchoice = () => {
  const option = ["rock","paper","sessior"];
  const rnd = Math.floor(Math.random()*3);
  return option[rnd];
};


const drawgame = () => {
  msg.innerText = "Game was Draw!";
  msg.style.backgroundColor = "blue";

};

const showwinner = (userwin,userchoice,bot_choice) => {
  if(userwin){
    score_user++ ;
    parascore_user.innerText = score_user;
    msg.innerText = `You Win ! Your ${userchoice} beats ${bot_choice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    score_bot++ ;
    parascore_bot.innerText = score_bot;
    msg.innerText = `You Lose .${bot_choice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};




const playgame = (userchoice) => {
  console.log("user choice =",userchoice);
  const bot_choice = getbotchoice();
  console.log("bot choice =",bot_choice); 

  if(userchoice === bot_choice){
    drawgame();
  }
  else {

    let userwin = true;
    if(userchoice === "rock"){
      userwin = bot_choice === "paper" ? false : true ;
    }
    else if(userchoice === "paper"){
      userwin = bot_choice === "sessior" ? false : true ;
    }
    else {
      bot_choice === "rock" ? false :true ;
    }
    showwinner(userwin,userchoice,bot_choice);
  }
};

choices.forEach((choice)=>{
  
  choice.addEventListener("click",() => {
    console.log("choice was clicked");
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});