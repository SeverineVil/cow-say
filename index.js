
// console.log(`Hi, my name is ${userSchool.school.name} and my campus is ${userSchool.school.campus}`);
// import cowsay from `cowsay`;
var cowsay = require("cowsay");

const userSchool = require(`./information`);

console.log(cowsay.say({
    text : `Hi, my name is ${userSchool.school.name} and my campus is ${userSchool.school.campus}`,
    e : "oO",
    T : "U "
}));
