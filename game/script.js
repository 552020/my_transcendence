// Configuration object for easily adjustable values
const CONFIG = {
  ballSpeed: 2, // Single speed value
  ballSize: 20, // Ball size in pixels
};

let ballSpeed = CONFIG.ballSpeed;
const ballSize = CONFIG.ballSize;

// Get references to the game area and ball elements
const gameArea = document.getElementById("gameArea");
const ball = document.getElementById("ball");
const startButton = document.getElementById("startButton");

// Directions for ball movement (-1 for left/up, 1 for right/down)
let directionX = 1;
let directionY = 1;

// Ball position
let ballX, ballY;

// Initialize control variables
let isMoving = false;
let animationFrameId;

function setInitialBallPosition() {
  const gameAreaRect = gameArea.getBoundingClientRect();
  ballX = (gameAreaRect.width - ballSize) / 2;
  ballY = (gameAreaRect.height - ballSize) / 2;
}

setInitialBallPosition();

function moveBall() {
  // Recalculate the game area size in case it has changed
  const gameAreaRect = gameArea.getBoundingClientRect();
  const gameAreaStyles = getComputedStyle(gameArea);
  const borderTop = parseFloat(gameAreaStyles.borderTopWidth);
  const borderRight = parseFloat(gameAreaStyles.borderRightWidth);
  const borderBottom = parseFloat(gameAreaStyles.borderBottomWidth);
  const borderLeft = parseFloat(gameAreaStyles.borderLeftWidth);

  const gameAreaWidth = gameAreaRect.width - borderLeft - borderRight;
  const gameAreaHeight = gameAreaRect.height - borderTop - borderBottom;

  // Update ball position based on speed
  ballX += ballSpeed * directionX;
  ballY += ballSpeed * directionY;

  // Check if the ball hits the left or right boundary
  if (ballX <= borderLeft || ballX + ballSize >= gameAreaWidth + borderLeft) {
    directionX *= -1; // Reverse direction
    ballX = ballX <= borderLeft ? borderLeft : gameAreaWidth + borderLeft - ballSize; // Prevent the ball from "sticking" into the wall
  }

  // Check if the ball hits the top or bottom boundary
  if (ballY <= borderTop || ballY + ballSize >= gameAreaHeight + borderTop) {
    directionY *= -1; // Reverse direction
    ballY = ballY <= borderTop ? borderTop : gameAreaHeight + borderTop - ballSize; // Prevent the ball from "sticking" into the wall
  }

  // Set the new position of the ball
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  // Call moveBall again to keep moving
  animationFrameId = requestAnimationFrame(moveBall);
}

function startBall() {
  if (!isMoving) {
    isMoving = true;
    startButton.textContent = "Stop";
    moveBall();
  }
}

function stopBall() {
  if (isMoving) {
    isMoving = false;
    startButton.textContent = "Start";
    cancelAnimationFrame(animationFrameId);
  }
}

// Toggle the ball's movement when the start button is clicked
startButton.addEventListener("click", function () {
  if (isMoving) {
    stopBall();
  } else {
    startBall();
  }
});

// Start moving the ball when the page loads
// window.onload = function () {
//   moveBall();
// };
