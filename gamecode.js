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
function validateInput(event){
    event.preventDefault();
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
        if(firstLast.length <20){
        alert("not enough charachters. Name must be at least 20 characters long");
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
    window.addEventListener("DOMContentLoaded", (event) => {
        const form = document.getElementById("form1");
        if (form) {
        form.addEventListener("submit", validateInput);
    } 
});