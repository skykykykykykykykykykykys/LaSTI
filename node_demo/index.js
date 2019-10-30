// running a  web server
const express = require('express')
const app = express()
var somerandomname = require('./somefunc')

app.get('/', function (req,res) {
  res.send('Hello World')
})

app.get('/another', function (req, res) {
  res.send('<h1>Another Hello World!<h1>')
})

app.get('/nama', function (req,res) {
  res.send('<h1>'
    + somerandomname.randomfirst + ' '
    + somerandomname.randommiddle + ' '
    + somerandomname.randomlast
    + '</h1>')
})

app.listen(3000)
