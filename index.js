const cowsay = require('cowsay');
const { data } = require('./information.js');

console.log(cowsay.say({text : data.nom, e : "O-", T : "U"}));
