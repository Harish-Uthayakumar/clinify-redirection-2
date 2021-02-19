var express = require('express')
var app = express()
const port = process.env.PORT || 3000

// respond with "hello world" when a GET request is made to the homepage

app.get('/', function(req, res) {

  res.redirect("https://www.clinify.in")
})
app.get('/whatsapp', function (req, res) {
  res.redirect("https://chat.whatsapp.com/LT6JtIwMhE42u5TNyKZfVw")
})

app.get('/discord', function(req,res) {
    res.redirect("https://discord.gg/ukhrVx4kyp")
})

app.listen(port, () => {

    console.log('Port is listening')
})