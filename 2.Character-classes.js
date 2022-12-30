// Привести номер к формату 79031234567
let example = '+7(903)-123-45-67'
let regexp1 = /\d/g
console.log(example.match(regexp1)) // Возвращает массив

console.log(example.match(regexp1).join(''))
console.log('...........')

console.log(example.replace(/\D/g, '')) // 79031234567  -- удаляет любые не цифры из строки

// Точка это любой символ, но не его отсутствие

console.log('X'.match(/./)) // X

let regexp0day = /.day/
console.log('0day'.match(regexp0day))
console.log('1day'.match(regexp0day))
console.log(' day'.match(regexp0day)) // пробел также является символом
console.log('day'.match(regexp0day)) // отсутствие символов == ложь
console.log('...........')
// Совпадения с переводом строки - /s

console.log('A\nB'.match(/A.B/)) // null
console.log('A\nB'.match(/A.B/s)) // A\nB (совпадение!)
