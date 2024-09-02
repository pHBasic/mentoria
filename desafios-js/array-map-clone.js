function arrayMap(array, callback){
  const newArray = []
  // array.forEach(e => {
  //   newArray.push(callback(e, array.indexOf(e), array))
  // });
  for (let a of array){
    newArray.push(callback(a, array.indexOf(a), array))
  }
  return newArray
}

console.log(arrayMap([3, 4, 5, 6], (x) => x * 2))