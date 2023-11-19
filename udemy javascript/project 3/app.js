'use strict';
const player0 = document.querySelector('.active');
const player1 = document.querySelector('.active');
const score0 = document.querySelector('#score-0').textContent = 0;
const score1 = document.querySelector('#score-1').textContent = 0;
const diceEl = document.querySelector('.dice');
const btnnewel = document.querySelector('.btn-new');
const btnroll = document.querySelector('.btn-roll');
const btnhold = document.querySelector('.btn-hold');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const switchplayer = function (){
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    document.getElementById(`current-${activeplayer}`).textContent =  0;
    player0.classList.toggle('active');
    player1.classList.toggle('active');
}
let currentscore = 0;
let activeplayer = 0;
let playing = true;
const scores = [0, 0]
diceEl.classList.add('hidden');
btnroll.addEventListener('click', function () {
    if(playing){
    const dice = Math.trunc(Math.random() * 6 +1);
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;
    if(dice !== 1){
        currentscore += dice;
        //current0.textContent = currentscore;
        document.getElementById(`current-${activeplayer}`).textContent = currentscore;
    }
    else{
         switchplayer();
    }
}
})
btnhold .addEventListener('click', function () {
 playing = false;
scores[activeplayer] += currentscore;
document.getElementById(`score-${activeplayer}`).textContent = scores[activeplayer];

switchplayer();
//document.querySelector('.player-score').textContent = scores[activeplayer];
if (scores[activeplayer] > 20) {
      document.getElementById(`player-${activeplayer}-panel`).style.backgroundColor = 'black';
      document.getElementById(`player-${activeplayer}-panel`).style.backgroundColor = 'black';
    
    }
})

btnnewel.addEventListener('click', function () {
    
    current0.textContent = 0;
    current1.textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    switchplayer();
document.querySelector('.active').style.backgroundColor = '#f7f7f7';
document.getElementById(`player-${activeplayer}-panel`).style.backgroundColor = '#fff';

})
