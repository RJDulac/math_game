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


timer = 60;
disableAnswers();

document.getElementById("score-value").innerText = 60;

function questionMath() {
    var randomNum1 = randomNum();
    var randomNum2 = randomNum();
    mathStr = randomNum1 + ' X ' + randomNum2;
    document.getElementById("question").innerText = mathStr;



    return randomNum1 * randomNum2;
}

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
    document.getElementById("game-over").style = "display: none";

    document.getElementById("start-reset").style = "pointer-events:none";
    //enable while playing
    enableAnswers();





    document.getElementById("start-reset").innerText = "Playing...";

    // document.getElementById("question").innerText = questionroblem();
    //need to feed randomized numbers with questionMath
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
    var correctMatch = questionMath();
    randomBox();
    function randomBox() {
        arrayRandomizer = [correctMatch, randomNum() * randomNum(), randomNum() * randomNum(), randomNum() * randomNum()]
        shuffle(arrayRandomizer);
        document.getElementById("box1").innerText = arrayRandomizer[0];
        document.getElementById("box2").innerText = arrayRandomizer[1];
        document.getElementById("box3").innerText = arrayRandomizer[2];
        document.getElementById("box4").innerText = arrayRandomizer[3];

        // return questionMath();
    }


    document.getElementById("time-remaining").style = "display: block";



    // setTimeout(function() {
    //     for(i=60; i >= 0; i--) {
    //         document.getElementById("time-remaining-value").innerText=i;
    //         console.log(i);

    //     }
    // })


    timeCounter();
    //  function goDown() {
    //      questionMath() = test;
    //      return test;
    //  }
    //  function goDown2() {
    //     return goDown();
    // }
    console.log(correctMatch)
    return this.test = correctMatch;

}
function correctCheck1() {
    if (document.getElementById("box1").innerText == test) {
        console.log("correct");
        document.getElementById("score-value").innerText = 60 + 1;
    }

}
function correctCheck2() {
    if (document.getElementById("box2").innerText == test) {
            console.log("correct");
            document.getElementById("score-value").innerText = 60 + 1;
        }
}
function correctCheck3() {
    if (document.getElementById("box3").innerText == test) {
            console.log("correct");
            document.getElementById("score-value").innerText = 60 +1;
        }
}
function correctCheck4() {
    if (document.getElementById("box4").innerText == test) {
            console.log("correct");
            document.getElementById("score-value").innerText = 60 + 1;
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
    // console.log(i);
    timer--
}


// function randomNum() {
//     var ranNum1 = Math.floor(Math.random() * 10) + 1;
//     var ranNum2 = Math.floor(Math.random() * 10) + 1;

//     var question = ranNum1 + " x " + ranNum2;
//     var answer = ranNum1 * ranNum2;

//     answerQuestion = [question,answer];
//    return answerQuestion;
// }

function randomNum() {


    return Math.floor(Math.random() * 10) + 1;
}