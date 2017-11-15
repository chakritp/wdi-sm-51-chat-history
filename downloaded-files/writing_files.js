var fs = require('fs')

var luckyNumber = 5
var contents = `
<h1>Hello</h1>
${luckyNumber}
`

fs.writeFileSync('haiku-report.html', contents)