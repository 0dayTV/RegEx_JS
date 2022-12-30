// Cимвольный класс \w является всего лишь сокращением для [a-zA-Z0-9_], он не найдёт китайские иероглифы, кириллические буквы и т.п.

let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu
let str = `Hi 你好 12`
console.log(str.match(regexp))
