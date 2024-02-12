// Grab the dodger and save a reference to it in a variable
const dodger = document.getElementById("dodger");

// Change dodger's color to pink
dodger.style.backgroundColor = "#FF69B4";

// Define moveDodgerLeft function
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if dodger's left edge is greater than 0 before moving
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Attach event listener for left arrow key
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Define moveDodgerRight function
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Move dodger to the right by 1 pixel if within the game field
  if (left < 360) { // Assuming game field width is 400px
    dodger.style.left = `${left + 1}px`;
  }
}

// Attach event listener for right arrow key
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
