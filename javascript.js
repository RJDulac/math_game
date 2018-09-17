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
    questionMath();
    timer = 60;
    document.getElementById("game-over").style = "display: none";

    document.getElementById("start-reset").style = "pointer-events:none";
    //enable while playing
    enableAnswers();





    document.getElementById("start-reset").innerText = "Playing...";

    // document.getElementById("question").innerText = questionroblem();
    //need to feed randomized numbers with questionMath
    randomBox(questionMath());
    function randomBox(x) {
        document.getElementById("box1").innerText = x;
        document.getElementById("box2").innerText = x;
        document.getElementById("box3").innerText = x;
        document.getElementById("box4").innerText = x;
    }


    document.getElementById("time-remaining").style = "display: block";



    // setTimeout(function() {
    //     for(i=60; i >= 0; i--) {
    //         document.getElementById("time-remaining-value").innerText=i;
    //         console.log(i);

    //     }
    // })


    timeCounter();

}

function timeCounter() {
    for (i = 0; i <= 60; i++) {
        (function (i) {
            setTimeout(function () {



                endTime();
                startTime();
            }, 100 * i);
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
    console.log(i);
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