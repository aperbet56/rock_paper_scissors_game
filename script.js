// Récupération des différents élémnets
const buttons = document.querySelectorAll("button");
const resultItem = document.querySelector("#result");
const playerScoreItem = document.querySelector("#user__score");
const computerScoreItem = document.querySelector("#computer__score");

// Création de la variable playerScore qui va stocker le score de l'utilisateur
let playerScore = 0;
// Création de la variable computerScore qui va stocker le score de l'ordinateur
let computerScore = 0;

// Déclaration de la fonction computerChoice qui va permettre de définir le choix de l'ordinateur
const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  // Constante randomChoice qui va permettre un choix aléatoire entre "rock", "paper" et "scissors"
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

// Déclaration de la fonction playRound qui va permettre à l'utilisateur et à l'ordinateur de joueur et de définir le gagnant
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log(playerSelection, computerSelection);
    return "C'est une égalité !";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(playerSelection, computerSelection);
    // Incrémentation du score de l'utilisateur
    playerScore++;
    playerScoreItem.textContent = playerScore;
    return "Vous avez gagné ! " + playerSelection + " bat " + computerSelection;
  } else {
    console.log(playerSelection, computerSelection);
    // Incrémentation du score de l'ordinateur
    computerScore++;
    computerScoreItem.textContent = computerScore;
    return "Vous avez perdu ! " + computerSelection + " bat " + playerSelection;
  }
};

buttons.forEach((button) => {
  // Ecoute de l'événement "click" sur un bouton
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerChoice());
    resultItem.textContent = result;
  });
});
