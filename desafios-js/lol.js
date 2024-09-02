function mapClone(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Exemplo de uso:
const numbers = [1, 2, 3, 4];
const doubled = mapClone(numbers, function(num, gil) {
    return num * (gil + 4);
});

console.log(doubled); // [2, 4, 6, 8]