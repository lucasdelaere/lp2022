let getal1 = Number(prompt("getal1: ")), getal2 = Number(prompt("getal2: "));

//selectie (conditie testen)

if (getal1 > getal2) {
    console.log(getal1, "is groter dan", getal2)
} else if (getal1 < getal2) {console.log(getal2, "is groter dan", getal1)}
else {console.log(getal1, "is gelijk aan", getal2)}

let naam = "Tom";
let beroep = prompt("beroep? bediende, arbeider, werkzoekend, zelfstandige");
if(beroep === "bediende"){
    console.log("u bent bediende")
} else if(beroep === "arbeider"){
   console.log("u bent arbeider")
} else {console.log("u bent werkzoekend of zelfstandige")}