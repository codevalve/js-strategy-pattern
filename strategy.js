// strategy.js
class Strategy {
    execute(a, b) {
        throw new Error('This method should be overridden!');
    }
}

module.exports = Strategy;