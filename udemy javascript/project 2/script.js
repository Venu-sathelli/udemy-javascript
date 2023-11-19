'use strict';
const modal = document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-model');
const btnOPenModel = document.querySelectorAll('.show-model');
//console.log(btnOPenModel);
for(let i = 0; i < btnOPenModel.length; i++){
   // console.log(btnOPenModel[i].textcontent);
}
function btn(){
    console.log('clicked button');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('body').classList.remove('hidden')
     
}
const closemodal = function(){
    modal.classList.add('hidden');
}
function fun(){
    modal.classList.add('hidden');
}


document.addEventListener('keydown', function (x){
    console.log(x.key);
    if(x.key === 'Escape'){
        closemodal();
    }
    else if(x.key === 'a'){
        closemodal();
    }
    else if(x.key === 'Backspace'){
        if(!modal.classList.contains('hidden'))
        closemodal();
    }

})

 
 
 
