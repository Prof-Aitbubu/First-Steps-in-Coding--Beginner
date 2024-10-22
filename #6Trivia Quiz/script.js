function quiz() {
  alert("Welcome to my trivia game! Are you ready?");

  // variable for the score
  let score = 0;

  // first question
  const q1 = prompt("What is the world's largest country by size?");
  if (q1 == "Russia") {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect!");
  }

  // second question
  const q2 = prompt("What is the world's longest river?");
  if (q2 == "Nile") {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect!");
  }

  // third question
  const q3 = prompt("Which continent has the most number of countries?");
  if (q3 == "Africa") {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect!");
  }

  // tell players their final score
  alert("You got " + score + " out of 3 questions correct!");
} // end bracket for the function
