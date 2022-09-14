const woord = prompt("tekenreeks")
const letter = prompt("karakter")

function tekenteller(tekenreeks, karakter) {

let count = 0
for (let char of tekenreeks) {
    if (char === karakter) {
        count += 1
    }
}
return count;
}

console.log(tekenteller(woord, letter))