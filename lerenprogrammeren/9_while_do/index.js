/** while(conditie)
 * code
 * Do
 * -----------------------
 * Do
 * code
 * while(conditie)
 *
 **/

let text = "";
let i = 0;
while(i<=10){
    text = i + " ";
    i++;
    console.log(i);
}

let text2 = "";
let x = 0;
do{
    text2 += x + " "
    x++;
}while(x<=10);
console.log(text2);