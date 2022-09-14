function powersof2() {
    const grens = Number(prompt("geef een bovengrens: "));

    let myArray = []; //of een string opbouwen

    for (let i = 1; i <= grens; i *= 2) {
        myArray.push(i.toString())
    }
    return myArray.join(",")
}

console.log(powersof2())
