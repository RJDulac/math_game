//if we click on the start/reset button
//if we are playing
//reload page
//if we are not playing
//set score to 0
//show countdown box
//reduce time by 1 second every second in loops
//is there time left?
//yes - continue
//no - gameover
//change button to reset
//generate a new question and multiple answers
//if we click on an answer box
//if we are playing
//check if answer is correct
//yes
//increase score by 1
//show correct box for 1 second
//generate new question and answers
//no
//show try again box for 1 second


var timer = 60;
var score = 0;


disableAnswers();

//put this in a function to reuse called updateScore
document.getElementById("score-value").innerText = score;

function enableAnswers() {
    document.getElementById("box1").style = "pointer-events:auto";
    document.getElementById("box2").style = "pointer-events:auto";
    document.getElementById("box3").style = "pointer-events:auto";
    document.getElementById("box4").style = "pointer-events:auto";
}

function disableAnswers() {
    document.getElementById("box1").style = "pointer-events:none";
    document.getElementById("box2").style = "pointer-events:none";
    document.getElementById("box3").style = "pointer-events:none";
    document.getElementById("box4").style = "pointer-events:none";
}

function startGame() {

    timer = 60;
    //enable while playing
    enableAnswers();
    //invoke code that randomizes question and answer boxes
    randomBox();

    //dom changes while playing
    document.getElementById("game-over").style = "display: none";
    document.getElementById("start-reset").style = "pointer-events:none";
    document.getElementById("start-reset").innerText = "Playing...";
    document.getElementById("time-remaining").style = "display: block";

    timeCounter();
    console.log(correctMatch)

}

//these functions can be shortened -- lots of repetitive code
function correctCheck1() {
    if (document.getElementById("box1").innerText == correctMatch) {
        console.log("correct");
        score++
        //update dom score
        document.getElementById("score-value").innerText = score;
        randomBox();
    }

}
function correctCheck2() {
    if (document.getElementById("box2").innerText == correctMatch) {
            console.log("correct");
            score++;
            document.getElementById("score-value").innerText = score;
            randomBox();
        }
}
function correctCheck3() {
    if (document.getElementById("box3").innerText == correctMatch) {
            console.log("correct");
            score++;
            document.getElementById("score-value").innerText = score;
            randomBox();
        }
}
function correctCheck4() {
    if (document.getElementById("box4").innerText == correctMatch) {
            console.log("correct");
            score++;
            document.getElementById("score-value").innerText = score;
            randomBox();
        }
}
function timeCounter() {
    for (i = 0; i <= 60; i++) {
        (function (i) {
            setTimeout(function () {



                endTime();
                startTime();
            }, 1000 * i);
        })(i);

    }
}

function endTime() {
    if (timer === 0) {
        document.getElementById("game-over").style = "display: block";
        document.getElementById("start-reset").style = "pointer-events:auto";
        document.getElementById("start-reset").innerText = "Reset Game";
        console.log("hit 0");
        disableAnswers();
    }
}

function startTime() {
    document.getElementById("time-remaining-value").innerText = timer;
    timer--
}

//randomize answer boxes and question
function randomBox() {

    function questionMath() {
        //don't need these variables anymore
        var randomNum1 = randomNum();
        var randomNum2 = randomNum();
        mathStr = randomNum1 + ' X ' + randomNum2;
        document.getElementById("question").innerText = mathStr;
    
    
        //don't need this returned anymore
        return randomNum1 * randomNum2;
    }
    this.correctMatch = questionMath();

    arrayRandomizer = [correctMatch, randomNum() * randomNum(), randomNum() * randomNum(), randomNum() * randomNum()]
    shuffle(arrayRandomizer);
    document.getElementById("box1").innerText = arrayRandomizer[0];
    document.getElementById("box2").innerText = arrayRandomizer[1];
    document.getElementById("box3").innerText = arrayRandomizer[2];
    document.getElementById("box4").innerText = arrayRandomizer[3];

    //returned so we can check it in dom comparison
    return correctMatch;
}

    //Fisher-Yates shuffle
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

//return a number between 1-10
function randomNum() {
    return Math.floor(Math.random() * 10) + 1;
}

