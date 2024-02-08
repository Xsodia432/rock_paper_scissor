const buttons = document.querySelectorAll("button");

const rps = (playerChoice) => {
  const choices = ["Rock", "Paper", "Scissor"];
  let result = "";

  const computerChoice = Math.floor(Math.random() * 3);
  const final_playerchoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  const final_computer = choices[computerChoice];

  if (final_computer === final_playerchoice) result = "Draw";
  else {
    if (final_playerchoice === "Rock" && final_computer === "Paper")
      result = "You Lose, computer picked " + final_computer;
    else if (final_playerchoice === "Scissor" && final_computer === "Rock")
      result = "You Lose, computer picked " + final_computer;
    else if (final_playerchoice === "Paper" && final_computer === "Scissor")
      result = "You Lose, computer picked " + final_computer;
    else {
      result = "Congrants!!! you win, computer picked " + final_computer;
    }
  }

  return result;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    alert(rps(button.value));
  });
});
