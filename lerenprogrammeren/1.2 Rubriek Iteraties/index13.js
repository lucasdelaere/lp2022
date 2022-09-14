getal1 = 15
getal2 = 27

for (let veelvoud = getal1*getal2; veelvoud > Math.max(getal1, getal2); veelvoud--) {
    if (veelvoud%getal1 === 0 && veelvoud%getal2 === 0) {
        var kgv = veelvoud
    }
}

console.log(`Het kleinste gemene veelvoud van ${getal1} en ${getal2} is: ${kgv}`)