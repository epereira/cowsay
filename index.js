const cowsay = require('cowsay');
const { data } = require('./information.js');
const message = `Hello I'm ${data.nom} from ${data.campus}`;

console.log(cowsay.say({text : message, e : "O-", T : "U"}));
