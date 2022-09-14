let getal = Number(prompt("Geef getal in waarvan je de faculteit wil zien: "))

function faculteitBerekenen(p1) {
let faculteit = 1
while (getal > 1) {
    faculteit *= getal
    getal -= 1
}
return faculteit
}

console.log(faculteitBerekenen(getal))



