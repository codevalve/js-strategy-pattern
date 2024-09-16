// addition.js
const Strategy = require('./strategy');

class Addition extends Strategy {
    execute(a, b) {
        return a + b;
    }
}

module.exports = Addition;