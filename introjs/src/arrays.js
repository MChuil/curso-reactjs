// arreglos
const arreglo = [1,2,3,4,5,6,7,8];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// arreglo.push(5)
// arreglo.push(6)
// arreglo.push(7)

const newArreglo = [...arreglo, 9, 10]
// newArreglo.push(10);

console.log(arreglo);

console.log(newArreglo)

const myArray = newArreglo.map(function(num){
    return num * 2;
})

console.log(myArray)


