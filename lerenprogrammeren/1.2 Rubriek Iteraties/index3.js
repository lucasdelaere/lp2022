let aantal = Number(prompt("geef een even aantal:"))

while (aantal%2 !== 0) {console.log("aantal moet even zijn")
aantal = Number(prompt("geef nieuw aantal:"))}
for (let i = 0; i < aantal; i++) {
    console.log("*".repeat(i+1))
}
for (let i = aantal -1; i >0; i--) {
    console.log("*".repeat(i))
}