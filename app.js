var express = require('express')
var app = express()
const port = process.env.PORT || 3000

// respond with "hello world" when a GET request is made to the homepage

app.get('/', function(req, res) {

  res.redirect("https://www.clinify.in")
})
app.get('/whatsapp', function (req, res) {
  res.redirect("https://chat.whatsapp.com/DqUiowwOT81KJlLWmCy9fm")
})

app.get('/discord', function(req,res) {
    res.redirect("https://discord.gg/ad5au7QvKx")
})


app.get('youtube', function(req, res) {
  res.redirect("https://www.youtube.com/channel/UCSuCYJ_jvzVJYFycR4WIZhw?sub_confirmation=1")
})

app.get('skill-newsletter', function(req, res) {
  res.redirect("")
})

app.listen(port, () => {

    console.log('Port is listening')
})