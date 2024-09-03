function calculateBMI(weight, height){
    const bmi = weight/(height*height)
    let result
    if(bmi >= 21 && bmi < 25){
        return 'Normal'
    }
    
    return bmi.toFixed(1)
}