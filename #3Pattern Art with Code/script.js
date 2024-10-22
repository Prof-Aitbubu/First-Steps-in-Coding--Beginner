let container = document.querySelector("body > div");

window.onload = window.onresize = resizeGame;

function resizeGame() {
  let gameRatio = container.offsetWidth / container.offsetHeight;
  let windowRatio = window.innerWidth / window.innerHeight;

  container.style.position = "absolute";
  container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;

  let newScale;
  if (gameRatio > windowRatio) {
    newScale = window.innerWidth / container.offsetWidth;
    if (newScale > 1) newScale = 1;
  } else {
    newScale = window.innerHeight / container.offsetHeight;
    if (newScale > 1) newScale = 1;
  }
  container.style.transform = `scale(${newScale})`;
}
