const getal1 = 75
const getal2 = 105 //normaal prompten

for (let deler = 1; deler < Math.min(getal1, getal2); deler++) {
    if (getal1%deler === 0 && getal2%deler === 0) {
        var ggd = deler
    }
}

console.log(`de grootste gemene deler van ${getal1} en ${getal2} is: ${ggd}`)