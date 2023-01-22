function getComputerChoice()
{
 let choice= Math.floor(Math.random()*3)+1;
 if(choice===1)
 {
  return "Rock";
 }
 if(choice===2)
 {
  return "Paper";
 }
 if(choice===3)
 {
  return "Scissors";
 }
}

function playRound(playerSelection, computerSelection) 
{
 if((playerSelection==="Rock")&&(computerSelection==="Rock"))
 {
  return "Draw";
 }
 if((playerSelection==="Rock")&&(computerSelection==="Paper"))
 {
  return "lose";
 }
 if((playerSelection==="Rock")&&(computerSelection==="Scissors"))
 {
  return "win";
 }
 if((playerSelection==="Paper")&&(computerSelection==="Rock"))
 {
  return "win";
 }
 if((playerSelection==="Paper")&&(computerSelection==="Paper"))
 {
  return "Draw";
 }
 if((playerSelection==="Paper")&&(computerSelection==="Scissors"))
 {
  return "lose";
 }
 if((playerSelection==="Scissors")&&(computerSelection==="Rock"))
 {
  return "lose";
 }
 if((playerSelection==="Scissors")&&(computerSelection==="Paper"))
 {
  return "win";
 }
 if((playerSelection==="Scissors")&&(computerSelection==="Scissors"))
 {
  return "Draw";
 }
}
 let win=0;
 let lose=0;
 let draw=0;
function game(playerSelection)
{
 if((win<5)&&(lose<5)) 
 {
  if((playRound(playerSelection, getComputerChoice()))==="win")
  {
   win++;
  }
  if((playRound(playerSelection, getComputerChoice()))==="lose")
  {
   lose++;
  }
  if((playRound(playerSelection, getComputerChoice()))==="Draw")
  {
   draw++;
  }
 }
 console.log(win);
 console.log(lose);
 if(win===5)
 {
  console.log("You win the round!");
  win=0;
  lose=0;
 }
 if(lose===5)
 {
  console.log("You lose the round!");
  win=0;
  lose=0;
 }
}
