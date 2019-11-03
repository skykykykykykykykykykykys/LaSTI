// running a  web server
const express = require('express')
const app = express()
var somerandomname = require('./somefunc')

//connecting to pq-promise
var pgp = require('pg-promise')
var dbPromise = pgp('postgres://lasti@178.128.104.74')

function connectDB(){
  dbPromise.any('SELECT * FROM pegawai')
            .then(data => {
              return data
            })
            .catch(err => {
              return err;
            })
}

app.get('/pegawai', function (req,res) {
  res.send(connectDB())
})


// below are just trying
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
