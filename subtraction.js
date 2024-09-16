// subtraction.js
const Strategy = require('./strategy');

class Subtraction extends Strategy {
    execute(a, b) {
        return a - b;
    }
}

module.exports = Subtraction;