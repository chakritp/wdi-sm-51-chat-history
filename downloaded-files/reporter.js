var fs = require('fs')

var myHaiku = fs.readFileSync('haiku.txt', 'utf-8')

wordsArray  = myHaiku.split(/\s/)

var wordFrequency = {}

wordsArray.forEach(function(word) {
    if (wordFrequency[word] !== undefined){
        wordFrequency[word] = wordFrequency[word] + 1
    } else {
        wordFrequency[word] = 1
    }
})

var contents = `
<h1>Report</h1>
`
for (w in wordFrequency){
    contents +=  `
        <div>
            ${w}: ${wordFrequency[w]}
        </div>
    `
}

fs.writeFileSync('haiku-report.html', contents)