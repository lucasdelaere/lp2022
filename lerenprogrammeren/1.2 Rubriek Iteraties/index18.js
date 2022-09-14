let eindgetal = 100;

a = Math.floor(Math.random() * eindgetal) //random number tussen 0 en eindgetal

let count = 0
let geraden = false
while (!geraden) {
    let guess = Number(prompt(`Gok een getal tussen 0 en ${eindgetal}.`))
    if (guess > a) {
        window.alert("Het getal is kleiner.")
        count += 1
    } else if (guess < a) {
        window.alert("Het getal is groter.")
        count += 1
    } else {
        window.alert(`Proficiat, u hebt het getal in ${count} keer geraden.`)
        geraden = true
    }
}