//var voorNaam = "Lucas"; //variabelen als camelcase schrijven
//console.log(voorNaam);
var geboorteJaar = 2000;

var voorNaam = prompt("Geef je voornaam in: ") //werkt niet in node.js, zoek alternatief (misschien readline)
console.log(voorNaam)

console.log(geboorteJaar);
console.log(typeof(voorNaam));
console.log(typeof(geboorteJaar));

var gehuwd = false;
console.log(typeof(gehuwd));

var niets;

niets = 7;
console.log(niets);
console.log(typeof(niets));

var x = Number("25");
console.log(x);

var familieNaam = "De Laere";
console.log(voorNaam + " " + familieNaam);
console.log(voorNaam, familieNaam);
console.log(voorNaam.concat(" "+familieNaam));
console.log(`${voorNaam}, ${familieNaam}`)

window.confirm("Ben je zeker dat je wenst te verwijderen?");

window.alert("Hallo, welkom bij javascript");