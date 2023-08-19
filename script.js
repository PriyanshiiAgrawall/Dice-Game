'use strict';
// grabbing ids and classes

const score1El = document.getElementById("score--0");
const score2El = document.getElementById("score--1");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const currentHold1El = document.getElementById(".score--1");
const currentHold2El = document.getElementById(".score--2");

const diceEl = document.querySelector(".dice");
const currentScoreEl = document.querySelector(".current-score");
const currentScore1El = document.getElementById("current--0");
const currentScore2El = document.getElementById("current--1");
const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true


// initial conditions

score1El.textContent = "0";
score2El.textContent = "0";
diceEl.classList.add("hidden");

//imp functions 
function switchingPlayers() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1El.classList.toggle("player--active");
    player2El.classList.toggle("player--active");
}
function newGame() {
    currentScore = 0
    activePlayer = 0
    scores = [0, 0]
    playing = true
    score1El.textContent = 0
    score2El.textContent = 0
    currentHold1El.textContent = 0
    currentHold2El.textContent = 0
    player1El.classList.add("player--active")
    player2El.classList.remove("player--active")
    player1El.classList.remove("player--winner")
    player2El.classList.remove("player--winner")


}

btnRoll.addEventListener("click", function () {
    if (playing) {
        const diceNo = Math.floor(Math.random() * 6) + 1;
        console.log(diceNo);
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${diceNo}.png`;
        if (diceNo !== 1) {
            currentScore += diceNo;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            switchingPlayers()
        }
    }
});
btnHold.addEventListener("click", function () {
    if (playing) {
        scores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0

        if (scores[activePlayer] >= 20) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            diceEl.classList.add("hidden");






        }
        else { switchingPlayers() }
    }


})
btnNew.addEventListener("click", function () {
    newGame()
})

