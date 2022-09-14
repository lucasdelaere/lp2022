let arr1 = Array.from(Array(10).keys()).sort(function(a, b) {return Math.random() - 0.5})
let arr2 = Array.from(Array(10).keys()).sort(function(a, b) {return Math.random() - 0.5})

let sum = 0
let arr3 = []
for (let [i, n] of arr1.entries()) {
    arr3.push(n + arr2[(i+1)%10])
}

console.log(`array1: ${arr1}\narray2: ${arr2}\narray3: ${arr3}`)
