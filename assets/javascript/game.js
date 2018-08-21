//have the computer pick a random number ranging from 19-120
//display that number in the id targetRow
// Assign a random number between 1-12 to each of the four gems
//When the user clicks a gem display the random number 
// add the number that resulted from the click to the scoreNumberRow
//if the user reaches the correct answer exactly add one to the wins category
//if the user goes over the correct amount add a tally to their losses
//reset the game once it is finished

var isFinished = false;
var targetNumber;
var gem1;
var gem2;
var gem3;
var gem4;
var wins = 0;
var losses = 0;




function playGame() {
    getTargetNumber()
    gemNumbers()
    addNumbers()
    endGame()
    // if (isFinished) {
    //     resetGame()
    // }
}

function getTargetNumber(min, max) {
   targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//replace html with JQuery
};

function gemNumbers(min, max) {
    gem1 = Math.floor(Math.random() * (12 - 1 + 1)) ;
    gem2 = Math.floor(Math.random() * (12 - 1 + 1)) ;
    gem3 = Math.floor(Math.random() * (12 - 1 + 1)) ;
    gem4 = Math.floor(Math.random() * (12 - 1 + 1)) ;
    //assign gem values to their buttons
}

function addNumbers (){
//click events to add to a variable 

}


function endGame() {
    if(totalNumbers === targetNumber) {
        wins++;
        isFinished = true;
    } else if (totalNumbers > targetNumber) {
        losses++;
        isFinished = true;
    }
}

// function resetGame(){
//     if
// }
$("input").click(function(){
    alert("The paragraph was clicked.");
});

playGame();
