// iprastine funkcijos forma/sintakse
function sudetis(a, b) {
    return a + b;
}
console.log(sudetis(8, 5));

// logikos priskirtimas kintamajam
const skirtumas = function (a, b) {
    return a - b;
}
console.log(skirtumas(8, 5));

// arrow function (rodykline funkcija)
const sandauga = (a, b) => {
    return a * b;
}

console.log(sandauga(8, 5));

// arrow function, kai proceduru (logikos) yra tik viena
const dalmuo = (a, b) => a / b;

console.log(dalmuo(8, 5));

// arrow function, kai turimas tik vienas parametras
const kvadratu = a => a * a;

console.log(kvadratu(8));
