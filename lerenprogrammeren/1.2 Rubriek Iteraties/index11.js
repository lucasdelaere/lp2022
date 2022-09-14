aantal = 10 //eigenlijk prompten aan user

fibonacci = [0, 1]

while (fibonacci.length <= aantal) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
}

console.log(fibonacci.map(getal => getal.toString()).join(","))