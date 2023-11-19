 'use strict';
//  function calAge (birthyear){
//   const age = 2023 - birthyear;
//   console.log(firstName);
//   function prinage(){
//     let output = `${firstName} is  you are ${age} born in ${birthyear}`;
//   console.log(output);
//   if(birthyear >= 2000 && birthyear <= 2010){
//     var millenial = true;
//     let firstName = 'ravan';
//     const str = `oh, and your're a millenials, ${firstName}`
//     console.log(str);
    
//     function add (a, b){
//       return a+b
//     }
//     console.log(add(2, 3));
//  }
//   output = 'NEW OUTPUT '
//   console.log(millenial);
//   console.log(output);
   
// }
//   prinage();
//   return age
//  }
//  const firstName = 'venu';
//  //const randam = Math.trunc(Math.random () * 3000)
//  calAge(2003);
// // console.log(calAge(2000));

// function age (birth){
//   const old = 2023 - birth;
//   console.log(names);
//   function marks(total){
//     console.log(`congratulations ${names} is a topper in the college the marks is ${total}`)
//     if(total >= 90 && total <= 100){
//       let names = 'raja ram';
//       const price = `${names} got a distrinction of the class highest marks is ${total}`
//       console.log(price);
//     }
//   }
//   marks(97)
//   return old
 
// }
// const names = 'nayak';
// age(2003)

// console.log(me);
// // console.log(job);
// // console.log(year);
// console.log(adddec(2,3));
// // console.log(addExpr(2,3));
// console.log(addarrow);
// //console.log(addarrow(2,3));

// var me = 'venu';
// let job = 'web developer';
// const year = 2023;

// function adddec (a,b) {
//   return a+b
// }
// const addExpr = function (a,b){
//   return a+b
// }
// var addarrow = (a,b) =>  a+b;
 
// // Example
// if (!numproduct) {
//  dleteshopingcart(); 
// }
// var numproduct = 10;
// function dleteshopingcart (){
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// // console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// const students = {
//   fistname : 'venu',
//    year : 2003,
//    calages : function (){
//     console.log(this);
//    }
  
// }
//  students.calages();

// console.log(this);

// const calAge = function (birthyear){
//   console.log(2023 - birthyear);
//   console.log(this);
// }
// calAge(2003);

// const calAgeArrow = birthyear =>{

//   console.log(2023 - birthyear);
//   console.log(this);
// }
// calAgeArrow(2002);

// const matlif = {
//   year : 2027,
// };
//matlif.calAgeArrow = calAge();
// var firstname = "maithili"
//  const students = {
//   fistname : 'venu',
//   job : 'student',  
//   year : 2002,
//   calge : function (){
//     //console.log(this);
//     this.age = 2023 - this.year;
//     //return this.age
//     // const self = this;
//     // const isMillenial = function () {
//     // console.log(self);
//     // console.log(self.year >= 1981 && self.year <=2028);
//     // };
//     //const self = this;
//     const isMillenial = () => {
//     console.log(this);
//     console.log(this.year >= 1981 && this.year <= 2028);
//     };
//    isMillenial();

//   },
//   gree : () => {
//     console.log(this);
//     console.log(`hey ${this.firstname}`)
//   },
  

//  };
//  students.marks = 98;
//  console.log(students.calge());
//  console.log(students.gree());
  
 
//  //argument keyword
//  const addExpr = function (a, b){
//   console.log(arguments);
//   return a + b
//  }
//  addExpr(2, 5);
//  addExpr(2, 5,8,15);

//  const addarrow = (a,b) =>{
//   console.log(this);
//   return a + b
//  }
//  addarrow(2,5);


//  let age = 30;
//  let oldage = age;
//  age = 58;
//  console.log(age);
//  console.log(oldage);

//  const me ={
//   firstname : 'venu',
//   age: 19
//  }

//  console.log(me);
//  const friend = me;
//  friend.age = 20;
//  console.log(friend);
//  console.log('me : ',me);

let lastname = 'bargav'
let oldlastname = lastname;
lastname = 'praveen nanda'
console.log(lastname, oldlastname)

const friends = {
  firstname : 'rakesh',
  lastname : 'anusha',
  age : 21,
  friendship : ['mahi','rakesh']
}
const students = {
    fistname : 'venu',
     year : 2003
     }
//console.log(friends);
const married = friends;
console.log("befor marriage", married);
console.log("after marriage", married);

const friendscopy = Object.assign({}, friends);
friendscopy.lastname = 'sowzi'
 
friendscopy.friendship.push('sai')
friendscopy.friendship.push('bargav')
console.log("after marriage", friends);
console.log("after marriage", friendscopy);