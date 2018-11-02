module.exports = {
    add: (...params) => {
        return params.reduce((a, b) => {
            return a + b;
        })
    },

    mul: (...params) => {
        return params.reduce((a, b) => {
            return a * b;
        })
    }
}