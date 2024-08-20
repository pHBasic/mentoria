function convertScale(toScale, value){
    if(toScale.toUpperCase() === 'C'){
        value = ((value - 32) * 5)/9
        return value.toFixed(1)
    }
    else if(toScale.toUpperCase() === 'F'){
        value = ((value * 9)/5) + 32
        return value.toFixed(1)
    }
}

console.log('80F° = ' + convertScale('C',80) + 'C°')
console.log('30C° = ' + convertScale('F',30) + 'F°')