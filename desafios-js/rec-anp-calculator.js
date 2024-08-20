function calculateRectANP(height, lenght){
    let area = height * lenght
    let perimeter = height + lenght

    return "Área: " + area + " " + "Perímetro: " + perimeter
}

console.log(calculateRectANP(10, 20))