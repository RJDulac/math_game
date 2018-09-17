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


function startGame() {
    timer = 60;
    document.getElementById("start-reset").style="pointer-events:none";

    document.getElementById("question").innerText = "7x8";
    document.getElementById("box1").innerText = 46;
    document.getElementById("box2").innerText = 56;
    document.getElementById("box3").innerText = 65;
    document.getElementById("box4").innerText = 31;

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
                document.getElementById("time-remaining-value").innerText = timer;
                console.log(i);
                timer--

               endTime();

            }, 1000 * i);
        })(i);
    }
}

function endTime() {
    if (timer === 0) {
        document.getElementById("game-over").style="display: block";
        document.getElementById("start-reset").style="pointer-events:auto";

        console.log("hit 0");
    } 
}

