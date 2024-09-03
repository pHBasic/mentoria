function checkIfTrue(condition, ifTrue, ifFalse ){
    if(condition() === 3)
        return ifTrue()
    else
        return ifFalse()
}

function getRandomInt() {
    const randomInt = Math.floor(Math.random() * 4);

    // console.log(randomInt);

    return randomInt;
}

function ifTrue() { return 'Número gerado é 3' }
function ifFalse() { return 'Número gerado não é 3' }

console.log(checkIfTrue(getRandomInt, ifTrue, ifFalse))