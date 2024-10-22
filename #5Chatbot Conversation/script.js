// function that runs when the button is clicked
function chat() {
  alert("Hello!");

  const myName = prompt("What is your name?");
  alert("Nice to meet you, " + myName + "!");

  const subject = prompt("What is your favorite subject at school?");
  if (subject == "science") {
    alert("Science class is awesome!");
  } else if (subject == "music") {
    alert("Music class is fun!");
  } else {
    alert("Cool!");
  }
} // end bracket to close the function
