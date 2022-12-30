// Часть шаблона можно заключить в скобки (...). «Скобочная группа».

let domens = 'mail.com users.mail.com smith.users.mail.com'
let emails = 'my@mail.com @ his@site.com.uk'
let regexpDomens = /(\w+\.)+\w+/g
let regexpEmails = /[-.\w]+@([\w-]+\.)+[\w-]+/g
console.log(domens.match(regexpDomens))
console.log(emails.match(regexpEmails))

// Именованные группы

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
let str = '2019-04-30'

let groups = str.match(dateRegexp).groups

console.log(groups.year) // 2019
console.log(groups.month) // 04
console.log(groups.day) // 30
