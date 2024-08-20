function calculateBMI(weight, height){
    let bmi = weight/(height*height)
    return bmi.toFixed(1)
}

console.log(calculateBMI(70, 1.86))