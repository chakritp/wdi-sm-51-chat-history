const request = require('request')
const cheerio = require('cheerio')

var url = 'https://losangeles.craigslist.org/search/boa'

function butFirst(coll){ return coll.slice(1)}
request(url, (err, response, body) => {
    if (err) console.error(err)
    // console.log(body)
    var $ = cheerio.load(body)
    var prices = []
    
    $('.result-price').each((i, el) => {
        prices.push(Number(butFirst($(el).text())))
    })

    console.log(prices)
    console.log( prices.reduce((a,b)=> a + b) / prices.length )
})