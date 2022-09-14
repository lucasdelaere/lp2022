let onderwijs = "VDAB";

function opmerking(instelling) {
    console.log(`Cursus gegeven door ${instelling}.`)
}

switch (onderwijs) {
    case "VDAB":
        opmerking("VDAB");
        break;
    case "Syntra":
        opmerking("Syntra");
        break;
    default:
        opmerking("een andere instelling")
}

/** verkorte notatie if statement **/
let getal1 = 2;
let getal2 = 3;

getal1>getal2 ? console.log("getal1 is groter") : console.log("getal2 is groter");

/** originele vorm */

if (getal1 > getal2){
    console.log("getal1 is groter dan getal2")
} else {console.log("getal2 is groter dan getal1")}