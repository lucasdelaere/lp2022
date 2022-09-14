/* declareer de volgende variabelen
*getal1, getal2, quotiënt, verschil, som, product
*Druk af in de console wat het resultaat is van deze 2 getallen.
 */

var getallen = prompt("geef twee getallen, gescheiden met een komma:")
const getal1 = Number(getallen.split(",")[0]), getal2 = Number(getallen.split(",")[1])

let quotient = getal1 / getal2;
let modulo = getal1 % getal2
let verschil = getal1 - getal2;
let som = getal1 + getal2;
let product = getal1 * getal2;

console.log(`quotient = ${quotient}, verschil = ${verschil}, som = ${som}, product = ${product}, modulo = ${modulo}`);
