aantal = Number(prompt("Hoeveel getallen: "))

let sum = 0
for (let i =0; i < aantal; i++) {
    let new_number = Number(prompt(`Geef getal ${i}:`))
    sum += new_number
}

console.log(`De totale som van ${aantal} getallen is ${sum}.`)