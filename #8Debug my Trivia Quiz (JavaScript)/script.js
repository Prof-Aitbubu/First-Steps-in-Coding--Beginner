function game() {
  // VARIABLE FOR PLAYER SCORE
  let playerScore = 0;

  alert("Welcome to the ultimate animal facts trivia game!");

  // ASK PLAYERS FOR THEIR NAME
  const yourName = prompt("Before we begin, what is your name?");
  alert("All right " + yourName + "," + " are you ready to play?");

  // FIRST QUESTION
  const question1 = prompt("What is the world's largest animal?");
  if (question1 == "blue whale") {
    alert("Correct!");
    playerScore = playerScore + 1;
  } else {
    alert("Incorrect! The blue whale is the world's largest animal!");
  }

  // SECOND QUESTION
  const question2 = prompt("What is the world's fastest animal?");
  if (question2 == "peregrine falcon") {
    alert("Correct!");
    playerScore = playerScore + 1;
  } else {
    alert("Incorrect! The Peregrine Falcon is the world's fastest animal!");
  }

  // TELL PLAYERS THEIR FINAL SCORE
  alert("Well done! You scored " + playerScore + " points!");
} //closing bracket for the function
