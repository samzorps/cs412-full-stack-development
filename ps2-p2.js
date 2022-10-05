/*
* Ps 2 Pr 2 By sam zorpette
 */

function* sentence () {
    let sentence = 'All I know is something like a bird within her sang';
    let placeholder = 0;
    while (true) {
        yield sentence.split(' ')[placeholder];
        placeholder++;
    }
}

let mys = sentence();
count = 11;
while (count --> 0){
    console.log(mys.next().value)
}