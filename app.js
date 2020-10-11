const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const exphbs = require('express-handlebars')
const generateResault=require('./generate_trash_talk')
// const generateTrashTalk=require('./generate_trash_talk.js')

//template engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//static files& bodyParser setting
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//routes setting
app.get('/', (req, res) => {
  res.render('index')
})

//express listener
app.listen(port, () => {
  console.log(`the express server is running on http://localhost:${port}`)
})

app.post('/', (req, res) => {
  const target = req.body
  const trashTalk = generateResault(target)
  res.render('index', { options: target, trashTalk: trashTalk })
})