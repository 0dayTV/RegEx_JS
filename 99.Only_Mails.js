const fs = require('fs') // модуль для работы с файлами

regexpForEmail = /\w+@\w+\.\w+/gi

let file = fs.readFile('mails.txt', 'utf8', function (err, doc) {
  let res = doc.match(regexpForEmail)
  console.log(res)
})
