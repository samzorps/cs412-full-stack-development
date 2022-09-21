/*
* Problem 1. By sam zorpette
* */

const reverse_alphabet = str1 => str1.split('').sort().reverse().join('');

const testInputs = ['exioi', 'supercalifragilisticexpialidocious'];

for (let i = 0; i < testInputs.length; i++) {
    let testInput = testInputs[i];
    console.log(`Example ${i + 1}: Reverse sorting of ${testInput} is ${reverse_alphabet(testInput)}`);
}