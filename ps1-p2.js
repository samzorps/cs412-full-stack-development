/*
* Problem 2. By sam zorpette
* */

const getFunc = (str) => {
    switch (str[1]){
        case "+":
            return (left, right) => left + right;
        case "-":
            return (left, right) => left - right;
        case "*":
            return (left, right) => left * right;
        case "/":
            return (left, right) => left / right;
        case "^":
            return (left, right) => left ** right;
        case "%":
            return (left, right) => left % right;
        default:
            console.log("invalid string")
    }
}

const getNums = exp => {
    let operand1 = parseInt(exp[0]);
    let operand2 = parseInt(exp[2]);
    return [operand1, operand2];
}

const calc = str => {
    let [num1, num2] = getNums(str)
    let func = getFunc(str)
    return func(num1, num2)
}

const testInputs = ["4+2", "5*7", "6-1", "9/2", "2^8"]

for (let i = 0; i < testInputs.length; i++) {
    let testInput = testInputs[i];
    console.log(`Example ${i + 1}: ${testInput} evaluates to ${calc(testInput)}`);
}