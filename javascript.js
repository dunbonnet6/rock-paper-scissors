// The program generates a random choice of rock, paper, or scissors, and stores it as a variable (a). 1 = rock, 2 = paper, 3 = scissors.  
function getRandomInt(min, max) { 

    return Math.floor(Math.random() * (max - min + 1) + min); 

} 

let varComputerChoice = getRandomInt(1, 3); 

// The human player decides if they want to play with rock, paper, or scissors. 
// The human player types it into their box and presses enter. This triggers the program to capture it as a variable (b)  

let varPlayerInput = prompt("Rock, Paper, or Scissors?");
let varPlayerChoice = null;

// turn text input to integer for comparison with computer input

if(varPlayerInput = "Rock") {
     varPlayerChoice = 1
}  else if(varPlayerInput = "Paper") {
     varPlayerChoice = 2
} else if(varPlayerInput = "Scissors") {
     varPlayerChoice = 3
} else {
    console.log("Invalid answer. Please enter Rock, Paper, or Scissors.")
}


// The program compares the two variables. 
// While a = rock 
while (varComputerChoice === 1) {
    if(varPlayerChoice === 1) {
        console.log("You both chose Rock- it's a tie!"); break // If b = rock, then a/b tie, end 
    } else if(varPlayerChoice === 2) {
        console.log("You chose Paper and the computer chose Rock. You win!"); break // If b = paper, then a lose, end 
    } else if(varPlayerChoice === 3) {
        console.log("You chose Scissors and the computer chose Rock. You lose!"); break // If b = scissors, then a win, end 
    } else break
}

while (varComputerChoice === 2) { //same as above code but with computer choosing paper
    if(varPlayerChoice === 1) {
        console.log("You chose Rock and the computer chose Paper. You lose!"); break
    } else if(varPlayerChoice === 2) {
        console.log("You both chose Paper- it's a tie!") ; break
    } else if(varPlayerChoice === 3) {
        console.log("You chose Scissors and the computer chose Paper. You win!") ; break
    } else break
}

while (varComputerChoice === 3) { //same as above code but with computer choosing scissors
    if(varPlayerChoice === 1) {
        console.log("You chose Rock and the computer chose Scissors. You win!") ; break
    } else if(varPlayerChoice === 2) {
        console.log("You chose Paper and the computer chose Scissors- you lose!") ; break
    } else if(varPlayerChoice === 3) {
        console.log("You both chose Scissors- it's a tie!") ; break
    } else break
}



// Computer prints results of the game 