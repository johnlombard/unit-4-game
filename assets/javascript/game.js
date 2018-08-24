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
var gemValue = [];
var userTotalScore = [];
var wins = 0;
var losses = 0;




function playGame() {
    getTargetNumber()
    gemNumbers()
    addNumbers()
    
}

//assigns and replaces 
function getTargetNumber(min, max) {
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#targetNumber").text("Target Number: " + targetNumber);

};


//assign gem values to their buttons
function gemNumbers(min, max) {
    gem1 = Math.floor(Math.random() * (13));
    gem2 = Math.floor(Math.random() * (13));
    gem3 = Math.floor(Math.random() * (13));
    gem4 = Math.floor(Math.random() * (13));
};

function addNumbers() {
    //click events to add to a variable 
    
    //new array
    $("#gem1").click(function () {
        console.log(gem1);

        gemValue.push(gem1);

        userTotalScore = gemValue.reduce(function (a, b) { return a + b }, 0);

        $("#scoreNumber").text(userTotalScore);
        endGame()

    });

    $("#gem2").click(function () {
        console.log(gem2);
        gemValue.push(gem2);

        userTotalScore = gemValue.reduce(function (a, b) { return a + b }, 0);

        $("#scoreNumber").text(userTotalScore);
        endGame()
    });

    $("#gem3").click(function () {
        console.log(gem3);
        gemValue.push(gem3);

        userTotalScore = gemValue.reduce(function (a, b) { return a + b }, 0);

        $("#scoreNumber").text(userTotalScore);
        endGame()
    });

    $("#gem4").click(function () {
        console.log(gem4);
        gemValue.push(gem4);

        userTotalScore = gemValue.reduce(function (a, b) { return a + b }, 0);

        $("#scoreNumber").text(userTotalScore);
        endGame()
    });
    console.log(userTotalScore);
    
};



function endGame() {
    if(userTotalScore === targetNumber) {
        wins++;
        isFinished = true;
        $("#wins").text("wins: " + wins);
        
        
    } else if (userTotalScore > targetNumber) {
        losses++;
        isFinished = true;
        $("#losses").text("losses: " +losses);
    };
    //stops game
    if(isFinished === true) {
        
    };
}

function resetGame(){
  
};



playGame();
