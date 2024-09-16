
// multiplication.js
const Strategy = require('./strategy');

class Multiplication extends Strategy {
    execute(a, b) {
        return a * b;
    }
}

module.exports = Multiplication;