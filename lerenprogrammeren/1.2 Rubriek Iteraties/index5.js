let newArray = []
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        newArray.push(i.toString() + j.toString())
    }
}

console.log(newArray.join(","))