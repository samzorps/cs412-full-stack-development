/*
* Ps 2 Pr 1 By sam zorpette
 */

function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* evenFibs () {
    let fib = fibs();
    while(true){
        currNum = fib.next().value;
        if (currNum % 2 === 0){
            yield currNum;
        }
    }
}

const myEFibs = evenFibs();
let nume = 6;
while( nume --> 0){
    console.log(myEFibs.next().value)
}