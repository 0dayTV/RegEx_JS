// Экранирование

console.log('Глава 5.1'.match(/\d\.\d/))
console.log('Глава 511'.match(/\d\.\d/)) // null ("\." - ищет обычную точку)

console.log('/'.match(/\//))

// Экранирование внутри […] диапозона

// Нет необходимости в экранировании
let regexp = /[-().^+]/g

console.log('1 + 2 - 3'.match(regexp)) // Совпадения +, -

// Экранирование всех возможных символов
let regexp_ = /[\-\(\)\.\^\+]/g

console.log('1 + 2 - 3'.match(regexp_)) // также работает: +, -
