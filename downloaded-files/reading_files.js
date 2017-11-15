var fs = require('fs')
// console.log(fs)
var myHaiku = fs.readFileSync('haiku.txt', 'utf-8')
console.log(myHaiku)