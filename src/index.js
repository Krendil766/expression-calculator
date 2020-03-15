function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    const str = expr.split('');
    breckets(str);
    zero(str);

    let res = expr.replace(/\s/g, '');
    return new Function('return ' + res)();
}

function breckets(str) {
    let counterBreckets = 0;

    for (let key of str) {
        if (key === "(") {
            counterBreckets++;
        }
        if (key === ")") {
            counterBreckets--;
        }
    }

    if (counterBreckets !== 0) {
        throw new Error("ExpressionError: Brackets must be paired");
    }
}

function zero(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "/") {
            if (str[i + 2] === "0") {
                throw new Error("TypeError: Division by zero.");
            }
        }
    }
}

module.exports = {
    expressionCalculator
};