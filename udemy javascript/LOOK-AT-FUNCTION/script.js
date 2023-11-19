 'use strict'
// const kgr = {
//   firstName : 'venu',
//   lastName : 'sathelli',
//   friends : ['mahi', 'sai', 'rohan'],
//   year : 2003,
//   calage : function (){
//     console.log(this)
//     let age = 2023 - this.year;
//     console.log(age);
//     if (age > 18){
//       console.log("you are elgible for vote")
//     }
//     else{
//       console.log("you are not elgible for vote wait ");
//     }
//   }
// }
 
// kgr.calage();

// const booking = [];
// const createbooking = function (name, number = 1, price = 199 * number){

//   const bookings = {
//     name,
//     number,
//     price
//   };
//  console.log(bookings)
//   //booking.push(bookings);
// }
// createbooking("venu");
// createbooking("venu",23,);
// createbooking("venu",undefined,23);

// const course = function (courseName,RollNo,fees){
//   const start = {
//     courseName,
//     RollNo,
//     fees
//   }  
//   start.clg = 'kgr'; 
//   console.log()
// }
// course('javascript','21qm5a6609',56000);

// const flight = 'Lh235487';
// const student = {
//   Name : 'venu',
//   passport : 86126538728761

// };

// const checkin = function (flightNUm,passenger) {
// flightNUm = "fh2387";
// passenger.Name = `Mr. ${passenger.Name}`
// if (passenger.passport === 86126538728761 ){
//   alert('checked in');
// }
// else{
//   alert('wrong password');
// }
// }
// checkin(flight,student);
// console.log(flight);
// console.log(student);

// const flightNUm = flight;
// const passenger = student;
// const newpassport = function (person){
//   person.passport = Math.tanh(Math.random() * 10000000000);
// }
// newpassport(student);
// checkin(flight,s)

const hallticket = '21qm5a6609';
const students = {
  Name : 'sathelli venu',
  rollNO : 1818119059
}
const result = function (hallticketNum,studentdetails){
hallticketNum = '21qm5a6608';
studentdetails.Name = `mr. ${studentdetails.Name}`
if (studentdetails.hallticket == '21qm5a6609'){
  console.log('checked');
}
else{
  console.log('wrong');
}
 }
 result(hallticket,students);
 console.log(hallticket);
 console.log(students);

 const hallticketnumbers = hallticket;
 const studentabot = students;
 const check = function (person){
person.hallticket = Math.trunc(Math.random() * 10000000000);
 }
 check(students);
 result(hallticket,students)


 const onword = function (str){
  return str.replace(/ /g, '').toLowerCase();
 }
 const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
 }

 const transformer = function (str, fn){
  console.log(`orginal string : ${str}`);
  console.log(`tranformed strings ${fn(str)}`);;
 }
transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the Best!', onword);

const high5 = function () {
  console.log('👍')
}
// document.body.addEventListener('click', high5);

 
 
const greet = (greeting) => {
  return function (name){
      console.log(`${greeting} ${name}`)
  }
}
const greethey = greet ('hey');
greethey("helloo")
greethey("sathelli")
greet("hello") ("venu")

const greedArr = greeting => Name => console.log(`${greeting} ${Name}`);
greedArr('hi')('rohan gangarapollu')

const elections = {
 trainn : 'bharat experess',
 seat : 'SLp',
 bookings : [],
 book (trainNum, name) {
  console.log(`${name} booked a seat on ${this.trainn} train seat num ${this.seat} ${trainNum}`)
  this.bookings.push({train : `${this.trainn} ${this.seat} ${trainNum}`, name })
 },
  
}
elections.book(365, 'venu')
console.log(elections);

const early = {
  trainn : 'bharat experess',
  Name : "pappu",
  seat : 'Ac',
  bookings :[],
};
const book = elections.book;
book.call(early,36, 'sahara')
console.log(early);
book.call(elections,256,'venkatesh')
console.log(elections);
const swings = {
  trainn : 'vandhe experess',
  Name : 'bangaram',
  seat : 'non ac',
  bookings : []
}
book.call(swings,57,'mahesh');
console.log(swings);
const bookEw = book.bind(elections);
const bookLH = book.bind(early);
const bookEL = book.bind(swings);
bookEw(23,'johncina')
const bookeW23 = book.bind(elections, 26);
bookeW23('tokesh jayavaram');

elections.traines = 650;
elections.buytrain = function (){
  console.log(this);
  this.traines++;
  console.log(this.traines
    );
    elections.buytrain()
}
document.querySelector('.btns').addEventListener('click', elections.buytrain.bind(elections))

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200));
const addAt = addTax.bind(null, 0.23)
console.log(addAt(100));
console.log(25);
const addTaxrate = function(rate){
  return function (value){
    return value + value * rate
  }
  
}
addTaxrate (0.1) (100);

const internship = {
  companyNme : 'infosys',
  branch : 'hyderabad',
  requirements : [],
  feild (deparment, name, ctc){
    console.log(`${name} placed at ${this.companyNme} the department is ${deparment} ctc is ${ctc} LPA`)
    this.requirements.push(`${name}, ${this.companyNme}, ${deparment}, ${ctc} `)
  }
}
internship.feild('web development', 'venu', 5)
console.log(internship);
 const jobs = {
  companyNme : 'wipro',
  Name : "baragava",
  requirements : []
 }

 const feild = internship.feild;
 feild.call(jobs,'cyber security', 'rakesh', 5.6)
 console.log(jobs);

 //challenges

 const poll = {
  question : 'what is your favourite programming language?',
  Options : ['0: javascript', '1: python', '2: rust', '3: C++'],
  answers : new Array (4).fill(),
  registerNewanswer (){
    const answer = Number(prompt(`${this.question}\n${this.Options.join('\n')}\n(write option number)`));
    console.log(answer);

  typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
 //console.log(answer);
 this.displatResults();
 this.displatResults('string');
  } ,

  displatResults (type = 'array'){
    if(type === 'array') {
      console.log(this.answers);
    }
    else if (type === 'string'){
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
 };
  poll.registerNewanswer();

  document.querySelector('.anwser').addEventListener('click', poll.registerNewanswer.bind(poll))
  poll.displatResults.call({answers: [5,2,3] }, 'string')
 

  function runonce (){
    console.log("The never will run again");
  }
  runonce();
  (function () {
    console.log('this will be run again');
    const pribate = 56
  })
  ();
  (() => console.log(('this also never run again🤦‍♂️')))
  ();

  // const secureBooking = function (){
  //   let passengercount = 0;
  //   return function () {
   
  //     console.log(`${this.passengercount} passengers`);
  //   }

  // }
  // secureBooking ();
 
let f;
 const g = function (){
  const a = 36;
  f = function (){
    console.log(a * 2);
  }
 }

 const h = function (){
  const b = 376;
  f = function (){
    console.log(b* 2);
  }
 }
  g();
  f();
  console.dir(f);
  h();
  f();
  console.dir(f); 

   const boardpasenger = function (n, wait){
    const perGroup = n /3;
    setTimeout(function (){
      console.log(`we are now boarding all ${n} passanger`);
      console.log(`There are 3 groups, each with ${perGroup} passenger`);
    }, wait * 1000);
    console.log(`will start boarding in ${wait} seconds`);
   } 
   boardpasenger(200, 5);

   (function () {
    const header =document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function(){
      header.style.color = 'blue';
    })
   })
   ();
