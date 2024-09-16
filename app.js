// app.js
const Addition = require('./addition');
const Subtraction = require('./subtraction');
const Multiplication = require('./multiplication');
const Division = require('./division');
const Context = require('./context');

const context = new Context(new Addition());

console.log("Addition: ", context.executeStrategy(5, 3)); // Output: 8

context.setStrategy(new Subtraction());
console.log("Subtraction: ", context.executeStrategy(5, 3)); // Output: 2

context.setStrategy(new Multiplication());
console.log("Multiplication: ", context.executeStrategy(5, 3)); // Output: 15

context.setStrategy(new Division());
console.log("Division: ", context.executeStrategy(5, 3)); // Output: 1.666...
