// division.js
const Strategy = require('./strategy');

class Division extends Strategy {
    execute(a, b) {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    }
}

module.exports = Division;