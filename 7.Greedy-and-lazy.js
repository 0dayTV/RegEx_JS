// Жадный квантор
let regexp = /".+"/g

let str = 'a "witch" and her "broom" is one'

console.log(str.match(regexp)) // "witch" and her "broom"

// В жадном режиме (по умолчанию) квантификатор повторяется столько раз, сколько это возможно.

// Ленивый - повторять квантификатор наименьшее количество раз

let regexpLazy = /".+?"/g

console.log(str.match(regexpLazy)) // witch, broom

// Альтернативное решение

let regexpAlternative = /"[^"]+"/g
console.log(str.match(regexpAlternative)) // witch, broom
