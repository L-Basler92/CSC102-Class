//Levi Basler 6/21/2026

function updatetext(){
    document.getElementById("heading").innerHTML = "Try to get 45!";
}
// this function generates a random number between 1 and 35
function randomnumber() {
    return Math.floor(Math.random() * 44) + 1;
}
// this funtion prompts the user for a number, generates a random number, and then sums them together.

function sumWithPrompt() {
// lets a user input a number between 1 and 44
let num1 = prompt("Enter your first number between 1 and 30:");


// generates a random number between 1 and 44
let num2 = randomnumber();

// converts the input to an integer and adds it to the random number
let sum = parseInt(num1) + parseInt(num2);


// displays the results on the page
var outputElement = document.getElementById("yournumbers");


// updates the HTML to show the numbers and the sum
outputElement.innerHTML = `Your numbers are: ${num1} and ${num2}. Sum is: ${sum}.<br><br>`;

// first checks if the sum is exactly 45
if (sum == 45) { 
    outputElement.innerHTML += "YOU WIN!";
}
// if the sum is less than or equal to 44, it tells the user it's too low
else if (sum <= 44) {
    outputElement.innerHTML += "Too low! Try again."; 
}
// if the sum is greater than or equal to 46, it tells the user it's too high
else if (sum >= 46)  {
    outputElement.innerHTML += "Too high! Try again.";
}
}
// this functions validated user imput and alerts if the name is too short or if the zip code is not 5 digits long or not a number. If the input is valid, it displays a secret message on the page.
function validateInput(event1){
    event1.preventDefault();
    // user inputs first name
    let firstName = document.getElementById("fname").value;
    
    //user inputs last name
    let lastName = document.getElementById("lname").value;
    
    // user inputs zip code
    let zipcode = document.getElementById("zipcode").value;
    
    // combines first and last name to check the total length of the name
    let firstLast = firstName + " " + lastName;
    // boolean variable to check if the input is valid
    let isValid = false;
    
    // loop started to keep prompting the user until they enter valid input
    while (!isValid)
        // first input validation check for name length
        if(firstLast.length >20){
        alert("To many charachters. Name must not be more then 20 characters long");
            break;
        }
        // next input validation checks for zipcode length and if it is a number
       else if (zipcode.length != 5 || (!Number.isInteger(parseInt(zipcode)) && parseInt(zipcode) > 99999)){
        alert("Zipcode must be a 5 digit number");
            break;
        }
        //outputs the secret message if the input is valid
        else if (!isValid) {
            outputElement = document.getElementById("stringresults");
            outputElement.innerHTML = `The secret message is: "This class is fun!"`;
            break;
    }
}
    // event listeners for the buttons and form submission
    window.addEventListener("DOMContentLoaded", (event1) => {
        const form1 = document.getElementById("form1");
        if (form1) {
            form1.addEventListener("submit", validateInput);
        }
});

let element // creates a global variable to store the image element
let start // global for the start time of the animation
let animation // global for the animation frame request ID, used to stop the animation

// event listener to start the animation when the DOM contest is loaded and to get the image element by its ID. Also adds event listeners to the start and stop buttons.
window.addEventListener("DOMContentLoaded", (event2) => {
    element = document.getElementById("programmingmeme");
    // adds event listeners to the form to start the animation when the start button is clicked and to stop the animation when the stop button is clicked
    const form = document.getElementById("submitButton");
    if (form) {
        form.addEventListener("onclick", validateInput)
        
    }});

// this function is called on each frame of the animation. It calculates the elapsed time since the animation started and updates the position of the image based on that time. The animation continues until it is stopped by the user.
function step(timestamp) 
{
    // if the start time is not set, set it to the current timestamp
    if (start === undefined) {
        start = timestamp;
    }
    // calculates the elapsed time since the animation started
    const elapsed = timestamp - start;
    // calculates the shift in position based on the elapsed time, with a maximum shift of 1000 pixels    
    const shift = Math.min(0.1 * elapsed, 1000)
    element.style.transform = `translateX(${shift}px)`;
    animation = requestAnimationFrame(step);
      
}
// this function starts the animation by requesting the first animation frame and toggling the buttons to disable the start button and enable the stop button.
function startMove() 
{    
    // resets the start time to undefined to start the animation from the beginning
    start = undefined;
    requestAnimationFrame(step);
    // toggles the buttons to disable the start button and enable the stop button
    toggleButtons(true);
    

}
// this function stops the animation by canceling the animation frame request and toggling the buttons to enable the start button and disable the stop button.
function stopMove() 
{    
    // cancels the animation frame request to stop the animation
    cancelAnimationFrame(animation);
    // toggles the buttons to enable the start button and disable the stop button
    toggleButtons(false);

}
// this function toggles the disabled state of the start and stop buttons based on whether the animation is running or not. If the animation is running, the start button is disabled and the stop button is enabled. If the animation is not running, the start button is enabled and the stop button is disabled.
function toggleButtons(isRunning) {
    const startButton = document.getElementById("submitButton");
    const stopButton = document.getElementById("submitButton2"); 
    startButton.disabled = isRunning;
    stopButton.disabled = !isRunning;
}

// new fuction for Plaindrome button 
function validateInput1(event3){
    event3.preventDefault();
    // setting globals for palindrome 
    let Palindrome = document.getElementById("palindrome").value;

     // removes non-letter characters and converts to lowercase
    let palindromcheck = Palindrome.toLowerCase().replace(/[^a-z]/g, "");

    // reverses the cleaned string
    let reversed = palindromcheck.split("").reverse().join(""); 
    // outputelement to connect to HTML to display results 
    let outputElement = document.getElementById("palindromeresults");
    // Boolian set
    let isValid = false;

// loop creation for propting user to input data before moving forward 
    while (!isValid) 
        // Checking length of word 
        if (palindromcheck.length < 3) {
        alert("Palindrome must be at least 3 characters long and contain only letters");
            return;
        // Checks if its the same forward and backwards, output and  diplays message if true
        } else if (palindromcheck === reversed) {
        outputElement.innerHTML = `The secret message is: "You found the palindrome!"`;
        isValid = true;
            return;
        // if not the same forward as backwards, output display message to try again
        } else if (palindromcheck !== reversed) {
        outputElement.innerHTML = `The secret message is: "Not a palindrome, try again!"`;
           return;

    }
}   
    // Event listener for button command
window.addEventListener("DOMContentLoaded", (event3) => {
    const form2 = document.getElementById("form2");
    if (form2) {
    form2.addEventListener("submit", validateInput1);
    
}});

// Play music funtion when button is clicked 
var myAudio = new Audio("funmusic/jazzfunk.mp3");
// The funtion that starts the music
function playmusic() {
    // Linking the play buttion to the function
    myAudio.play();
    // Linking the myAudioElement to the button and play function
    var myAudioElement = document.getElementById("myAudio");
    myAudioElement.play();

}