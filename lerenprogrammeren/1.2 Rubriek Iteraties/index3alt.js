let aantal = 21 //Number(prompt("geef een even aantal:"))

//while (aantal%2 !== 0) {console.log("aantal moet even zijn")}

for (let i = 0; i <= aantal; i += 1) {
    let rest = aantal - i
    console.log(" ".repeat(rest) + "*".repeat(2*i) + " ".repeat(rest))
}

for (let i = aantal; i >= 0; i-= 1) {
    let rest = aantal - i
    console.log(" ".repeat(rest) + "*".repeat(2*i) + " ".repeat(rest))
}