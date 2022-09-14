aantal = Number(prompt("Hoeveel getallen?: "))
let i = 0
let sum = 0
while (i < aantal) {
    getal = Number(prompt(`Geef getal ${i+1} in: `))
    sum += getal
    i++
}
console.log(`De totale som van ${aantal} getallen is ${sum}. \n
Het gemiddelde van de ${aantal} getallen is ${sum/aantal}.`)