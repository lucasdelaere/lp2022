const leeftijd = Number(prompt("Geef je leeftijd: "))

if (leeftijd >= 18) {
    console.log(`Je bent ${leeftijd} jaar oud. Je mag deelnemen aan de spelen van
de Nationale Loterij.`)
    const vakjes = Number(prompt("hoeveel vakjes wil je? (2/4/6/8/10/12)"))

    switch (vakjes) {
        case 10:
            console.log("kostprijs is 18")
            break;
        case 12:
            console.log("kostprijs is 20")
            break;
        default:
            console.log(`kostprijs is ${vakjes * 2}`)
    }
} else {
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.")
}

// Ctrl + Shift + Alt + L om code leesbaarder te maken