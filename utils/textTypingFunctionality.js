// Text to display
const text = "welcome to predict which product is witch country owns. choose any one option to predict :";

// Get the welcome message element
const welcomeMsgElement = document.getElementById("welcome-msg");

// Function to animate text
function animateText(text, element, delay) {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index === text.length) {
      clearInterval(intervalId); // Stop the animation
    } else {
      element.textContent += text.charAt(index);
      index++;
    }
  }, delay);
}

// Delay between typing each character (in milliseconds)
const typingDelay = 100;

// Call the function to start animating text
animateText(text, welcomeMsgElement, typingDelay);