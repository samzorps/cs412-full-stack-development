/*
* Problem 3. By sam zorpette
* */

const runfunc = (str, func) => func(str);

const out1 = runfunc("supercalifragilisticexpialidocious",
        str => {
    let newArr = [''];
    for(let i=0; i<str.length; i++){
        let curr = str[i]
        if(curr === "c"){
            newArr.push(["c"]);
        } else {
            newArr[newArr.length - 1] = newArr[newArr.length - 1] + curr;
        }
    }
    return newArr;
    }
)

console.log("first example", out1);

const out2 = runfunc("supercalifragilisticexpialidocious",
    str => {
    let aCount = 0;
    let length = str.length;
    let newStr;
    let newStrArray = [];
    for(let i=0; i<str.length; i++){
        if (str[i] === "a"){
            newStrArray.push('A')
            aCount++;
        } else {
            newStrArray.push(str[i]);
        }
    }
    newStr = newStrArray.join('')
        return {
            'originalString': str,
            'modifiedString': newStr,
            'numberReplaced': aCount,
            'length': length
        }})
console.log("second example", out2);
