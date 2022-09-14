let eindgetal = Number(prompt("Geef eindgetal in: "))
let i = 1
let output = ""
while (i <= eindgetal) {
    if (i%3 === 0) {output += (i.toString() + ", ").repeat(2)}
    else if (i%10 === 0) {}
    else {output += i.toString() + ", "}
    i += 1
}
console.log(output.slice(0, -2))