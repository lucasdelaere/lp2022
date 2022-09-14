const getal = Number(prompt("geef getal:"))

let faculteit = getal
for (let i = 1; i < getal; i++) {
    console.log(i)
    faculteit *= i
}
console.log(faculteit)