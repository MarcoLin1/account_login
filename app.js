const express = require('express')
const port = 3000
const app = express()
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkAccount = require('./account')



app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const results = checkAccount(req.body.email, req.body.password)
  console.log(results.status)
  if (results.status === 'success') {
    return res.render('welcome', { name: results.name })
  } else {
    return res.render('fail')
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})