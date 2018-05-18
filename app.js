let arrayOne = [5, 10, 15, 20]

function addUp(arrayOne) {
    let sum = 0
    for (let i = 0; i < arrayOne.length; i++) {
        sum += arrayOne[i]
    }
    return sum
}
console.log(addUp(arrayOne))
    