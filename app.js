let arrayOne = [5, 10, 15, 20]

function addUp(arrayOne) {
    let sum = 0
    for (let i = 0; i < arrayOne.length; i++) {
        sum += arrayOne[i]
    }
    return sum
}
console.log(addUp(arrayOne))

let codingPeeps = [{
    name: 'Ben',
    age:'19300 years'
},{name:'Ryan',
age:'200'}]

const num = [2,2,2,3,7]

function reductify(){
  let red =  num.reduce((accum,cv)=> accum + cv)
return red
}

reductify()