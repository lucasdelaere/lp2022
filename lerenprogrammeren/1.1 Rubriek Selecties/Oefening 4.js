let geboortejaar = Number(prompt("Geef geboortjeaar: ")), jaartal = Number(prompt("Geef jaartal: "))

let totaal = jaartal - geboortejaar
if (totaal < 0) {console.log("totaal mag geen negatief getal zijn. Jaartal moet groter of gelijk zijn aan geboortejaar.")}
else if (totaal >= 18) {console.log("Vanaf nu mag, kan en beslis ik alles, binne nde wettelijke grenzen.")}
else {console.log("Gelukkig heb ik mijn ouders die alles voor me regelen.")}

