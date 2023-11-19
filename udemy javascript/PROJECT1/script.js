'use strict'
//console.log(document.querySelector('.message').textContent);
//const doc =  document.getElementsByClassName ('number').innerHTML = 'hello world';
//console.log(doc)
//function myfun(){
 //   document.querySelector('.dem').innerHTML = 'venu';
//}
 //document.querySelector('.meassage').textContent = 'helloooooo';
 //document.addEventListener("DOMContentLoaded", function() {
    // Your code that interacts with the DOM here
   // document.querySelector('#hello').textContent = '🎉 Correct Number';
//});


//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 18;
//.document.querySelector('.Guess').value = 23;
//console.log(document.querySelector('.Guess').value)

//document.querySelector('.checker').addEventListener('click', function (){
  //  console.log(document.querySelector('.Guess').value);
//})
const number = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector('.number').textContent = number ;
//document.querySelector('.number').textContent = '?' ;
function myfun(){
 
    const Guess = Number(document.querySelector('.Guess').value);
    let ctr = document.querySelector('#hello').textContent = '🎉 Correct Number';
    console.log(Guess, typeof Guess);
    if(!Guess){
      document.querySelector('#hello').textContent = '☄️ NO Number';
    }
     
    else if(Guess === number){
      document.querySelector('#hello').textContent = '🎉 Correct Number';
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'rgb(41, 102, 41)' ;
    }
     
    else if(Guess > number){
      if(score > 1){
      document.querySelector('#hello').textContent = Guess > number ? '📈 Too High' : '📉 Too Low';
     score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('#hello').textContent = '💥 You Lost the Game';
      document.querySelector('.score').textContent = score;
    }
  }
    else if(Guess < number){
      if(score > 1){
      document.querySelector('#hello').textContent = '📉 Too Low';
       score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('#hello').textContent = '💥 You Lost the Game';
      document.querySelector('.score').textContent = score;
    }
  }
  let higherscore = 20;
  
    //if(higherscore > score)
    //higherscore = score;
    document.querySelector('.highscore').textContent = higherscore;

    
}
function again(){
  const number = Math.trunc(Math.random()*20) + 1;
   let score = 20;
  document.querySelector('#hello').textContent = '🎉 start Guessing...';
  
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = number;
   
  document.querySelector('body').style.backgroundColor = 'rgb(35, 37, 35)' ;
  document.querySelector('.Guess').value = '';
  if(!Guess){
    document.querySelector('#hello').textContent = '☄️ NO Number';
  }
  else if(Guess === number){
    document.querySelector('#hello').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'rgb(41, 102, 41)' ;
  }
  
  else if(Guess > number){
    if(score > 1){
    document.querySelector('#hello').textContent = '📈 Too High';
   score--;
    document.querySelector('.score').textContent = score;
  }
  else{
    document.querySelector('#hello').textContent = '💥 You Lost the Game';
    document.querySelector('.score').textContent = score;
  }
}
  else if(Guess < number){
    if(score > 1){
    document.querySelector('#hello').textContent = '📉 Too Low';
     score--;
    document.querySelector('.score').textContent = score;
  }
  else{
    document.querySelector('#hello').textContent = '💥 You Lost the Game';
    document.querySelector('.score').textContent = score;
  }
}

  
}

 






















































 

 