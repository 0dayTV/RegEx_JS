// Якоря

// Каретка ^ означает совпадение с началом текста, а доллар $ – с концом.

let str1 = 'Mary had a little lamb'
console.log(/^Mary/.test(str1)) // true

let str2 = "it's fleece was white as snow"
console.log(/snow$/.test(str2)) // true

// Проверка, что строка является временем в формате 12:34, то есть две цифры, затем двоеточие, затем ещё две цифры.

let goodInput = '12:34'
let badInput = '12:345'

let regexp = /^\d\d:\d\d$/
console.log(regexp.test(goodInput)) // true
console.log(regexp.test(badInput)) // false

/* Многострочный режим включается флагом m.

Он влияет только на поведение ^ и $.
*/
let str = `1е место: Винни
2е место: Пятачок
3е место: Слонопотам`

console.log(str.match(/^\d/gm)) // Поиск совпадение по началу строки
console.log(str.match(/^\d/g)) //  Только первое место без флага m

let str_ = `Винни: 1
Пятачок: 2
Слонопотам: 3`

console.log(str_.match(/\d$/gm)) // Аналогично с концом строки
