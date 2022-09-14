eindgetal = 50 //Number(prompt("geef een eindgetal: "))
primes = [...Array(eindgetal).keys()].map(x => x+=1)

let isPrime = true
for (let i = 1; i <= eindgetal; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primes.splice(primes.indexOf(i), 1)
            break;
        }
    }
}
console.log(primes.join(","))
//console.log([...new Set(myarray)].join(",")) //omdat er herhalingen zitten

