// For the first image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a random number from 1 to 6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // Concatenates to get a random image filename
var randomImageSource1 = "images/" + randomDiceImage1; // Constructs the source path for the image
var image1 = document.querySelectorAll("img")[0]; // Selects the first image element
image1.setAttribute("src", randomImageSource1); // Sets the src attribute of the first image

// For the second image
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generates a random number from 1 to 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // Concatenates to get a random image filename
var randomImageSource2 = "images/" + randomDiceImage2; // Constructs the source path for the image
var image2 = document.querySelectorAll("img")[1]; // Selects the second image element
image2.setAttribute("src", randomImageSource2); // Sets the src attribute of the second image

// Logic of the game
var heading = document.querySelector("h1"); // Selects the h1 element
if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩Player 1 Wins!"; // Sets the text content of h1
} else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins!🚩"; // Sets the text content of h1
} else {
    heading.textContent = "Draw!"; // Sets the text content of h1
}
