regex = new RegExp()

regex = /шаблон/gim
// Основная разница между этими двумя способами создания заключается в том, что слеши
// /.../ не допускают никаких вставок переменных (наподобие возможных в строках через ${...}). Они полностью статичны.

// Метод str.match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое
let example = 'follow the White Rabbit, white'
console.log(example.match(/hite/)) // Совпадение
console.log('...........')
console.log(example.match(/\bwhite\b/)) // Граница слова \b не работает для алфавитов, не основанных на латинице
console.log('...........')
console.log(example.match(/white/)) // Первое совпадение
console.log('...........')
console.log(example.match(/white/i)) // Первое совпадение без учета регистра
console.log('...........')
console.log(example.match(/white/gi)) // все совпадения
console.log('...........')

// Замена
console.log('White, White'.replace(/white/i, 'Black')) // Только первое

console.log('White, White'.replace(/white/gi, 'Black'))

console.log('I like JS'.replace(/JS/, '$& and TS')) // Замена с добавление

// Проверка

let check = 'I like JavaScRipt'
let regexValidator = /JavaScript/i
console.log(regexValidator.test(check)) // true
