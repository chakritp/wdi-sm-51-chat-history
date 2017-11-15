const express = require('express')
const app = express()
const moment = require('moment')
const request = require('sync-request')
const fs = require('fs')
const jsonfile = require('jsonfile')
const users = jsonfile.readFileSync('./users.json')

var chatHistoryfile = './wdi-sm-51_history.json'
var openedChatHistoryFile = jsonfile.readFileSync(chatHistoryfile)
var messages = openedChatHistoryFile.messages
var filesToDownload = []

const getOrAddUser = (userId) => {
  return users[userId]
}

app.set('view engine', 'ejs')

// download files from url
// let messagesWithFilesCount = 0
// messages.forEach((message, index) => {
//   if(message.file){
//     messagesWithFilesCount += 1
//     filesToDownload.push(message.file.url_private)
//   }
// })

// filesToDownload.forEach((url, index) => {
//   let r = request({url: url, headers: {'Authorization': 'Bearer ' + token}})
//   r.on('response', (res) => {
//     console.log(url)
//     let fileName = url.substr(url.lastIndexOf('/') + 1)
//     res.pipe(fs.createWriteStream('./downloaded-files/' + fileName))
//     console.log('////////////////////////////////////////////////////////////////////////////////')
//   })
// })
////////////////////// end download files

//get user ids
// messages.forEach(message => {
//   if(message.user) {
//     console.log(getOrAddUser(message.user))
//   }
// })

app.get('/', (req, res) => {
  res.render('index', {users, messages, moment})
})

app.listen(3000, (err) => {
  console.log(err || "Listening on port 3000")
})