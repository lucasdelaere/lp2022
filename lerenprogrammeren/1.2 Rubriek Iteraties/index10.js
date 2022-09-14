const factor = 1
const eind = 12

function tafels(tafel, eindgetal) {
    let count = 0
    let tekst = ""
    for (let i = 1; i <= eindgetal; i++) {
        tekst += `${tafel} x ${i} = ${tafel * i}, `
        count += 1
        if (count === 3) {
            console.log(tekst.slice(0, -2))
            count = 0
            tekst = ""
        }
    }
}



tafels(tafel = factor, eindgetal = eind)