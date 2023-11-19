/*let js = 'amazing'
console.log(25 + 8 + 6 * 3 - 26);
if (js == 'amazing') alert('javascript')
console.log("jonas");
console.log(26);
let firstName = "venu sathelli";
let roleNumber = 22;
console.log("firstName :", firstName);
console.log("role Numbber :", roleNumber);
let jons_matcch = "cricket";
jons_matcch = "kabaddi";
console.log(jons_matcch);
const $Kgr = 'college top 50'
alert($Kgr)*/

/*
let javascriptFun = true;
console.log(typeof javascriptFun);
console.log(typeof 23);
console.log(typeof 35.8);
console.log(typeof 'venu');
javascriptFun = 'yes';
console.log(typeof javascriptFun);
let year;
console.log(year);
console.log(typeof year);
year = 2023;
console.log(typeof year);
console.log(typeof null);
*/



// declare the different types of varianle declaration
/*
let age = 18; 
age = 21; // let can be update but doesnot declar same variable
console.log(age)
 //let age;  it showing error because i already declared
  const birthyear = 2003;
  console.log(birthyear);
  //const today;   it showing error because you must assign the values
  var salary = "3lp"; // var is declare multiple times and also update 
  console.log(salary);
  var bus; 
*/



/*// operators
 const now = 2023
const ageVenu = now - 2003;
const ageKgr = now - 2019;
console.log(ageVenu);
console.log(ageVenu * 2, ageKgr/10, 2**3);
//2**3 means 2 to power of 3 = 2*2*2

const firstName = "sathelli";
const lastName = "venu";
console.log(firstName + " " + lastName);
 

// assignment operators

let x = 12+8;
 x+= 8;
 x-= 2;
 x++;
 --x;
 x--;
 console.log(x);
 
 //comperision operators

 const comparision = ageVenu > ageKgr;
 console.log(comparision);
 console.log(now-2023 >= now-2019);
 console.log(ageKgr+14 >=18*2/2);
 let s,y ;
 s = y =35 - 10 - 5;
 console.log(s,y);
 console.log()
 
*/

var fullName = "sathelli venu";
var birthyear = 2003;
var job = "student";
var year = 2023;
console.log("I'm", fullName, ", a", year - birthyear, "old ", job);
var details = `I'm ${fullName}, a ${year - birthyear} old ${job}`
console.log(details);
var text = "i am learning about strings...";
console.log(text);
console.log('i am learner \n\ in kg reddy college \n\ csm branch');
console.log(`i am student 
in kg reddy engineering 
college moinabad`);
console.log(text.indexOf("about"));
console.log(text.lastIndexOf("learning"));
console.log(text.search("strings"));

const age = 15;
const conditions = age >= 18;
if (conditions) {
  console.log("you are elgible for license");
}
else {
  console.log(`venu wait ${18 - age} years `)
}
const Marks = 78;
if (Marks >= 75) {
  console.log("congratulations you are selected TCS👏");

}
else {
  console.log("you are not selected TCS");
}
let power;
if (power > 10) {
  let power = 11;
  console.log(power);
}
else {
  let power = 5;
  console.log(power);
}
// type conversion

var strin1 = "1991";
console.log(strin1);
console.log(Number(strin1), strin1);
console.log(Number(strin1) + 19);
console.log(strin1 + 18);
console.log(String(36), 36);

// type coercion
console.log('i am ' + 20 + ' year old');
console.log('23' - '10' - 6);
console.log('35' * '2');

let n = "1" + 2;
n = n - 2;
console.log(n);
let y = '10' - '3' + 2 - '8';
console.log(y);

//Truthy and falsy values
// flasy values are   0 , '', undifined , null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('27'));
console.log(Boolean('venu'));


const money = 0;
if (money) {
  console.log("don't spend money");
}
else {

  console.log("you shoulg get job");
}
const height = 7;
if (height) {
  console.log("perfect match height");
}
else {
  console.log("doesn't match height you will increse height");
}

var Number1 = '19';
if (Number1 == 19) console.log("it is double equal meanse (loose )");
if (Number1 === 19) console.log("it is thrible equal meanse (stict)");
const favourite = Number(prompt("enter your favorite number"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 27) {
  console.log("amazing 27 is equal to 27!");
}
else if (favourite === 9) {
  console.log("9 is equal to favourite number");
}
else if (favourite === 7) {
  console.log("7 is equal to favourite number");
}
else {
  console.log("not equal to any favourite number")
}
if (favourite !== 22) console.log("why it is not equal");

const goodDriver = true;
const driveLicense = false;
console.log(goodDriver && driveLicense);
console.log(goodDriver || driveLicense);
const istired = true;
console.log(goodDriver && driveLicense && istired);
console.log(goodDriver || driveLicense || istired);
if (goodDriver && driveLicense && istired) {
  console.log("venu is able to drive");
}
else {
  console.log('venu is not able to drive');
}

const num = 5;
let result;
if (num > 0) {
  result = "positive"
}
else {
  result = "not positive"
}
console.log(result)
const day = "saturday";
switch (day) {
  case "monday":
    console.log("Today is monday");
    break;
  case "Tuesday":
    console.log("Today is tuesday");
    break;
  case "wednesday":
    console.log("Today is chicken in our hostel");
    break;
  case "thursday":
    console.log("To day thursday");
    break;
  case "friday":
    console.log("Today is frydrice in our hostel")
    break;
  case "saturday":
    console.log("to day is fasting");
    break;
  case "sunday":
    console.log("to day is holiday");

  default:
    console.log("in valid !");

}
if (day === "monday") {
  console.log("good morning day1");
}
else if (day === "tuesday") {
  console.log("good morning day2");
}
else if (day === "wendnesday" || day === "thursday") {
  console.log("to day is fun day");

}
else if (day === "friday") {
  console.log("enjoy day");
}
else if (day === "saturday" || day === "sunday") {
  console.log("holidays");
}
else {
  console.log("try again");
}

const ages = 20;
ages >= 18 ? console.log("good morning day1")
  : console.log("donot accept");


const drink = ages >= 18 ? 'wine' : 'water'
console.log(drink)
let drink2;
if (ages >= 18) {
  console.log("wine🍷");
}
else {
  console.log("water💦");
}
