// random-name package
var randomname = require('random-name')

module.exports = {
  randomfirst: randomname.first(),
  randommiddle: randomname.middle(),
  randomlast: randomname.last(),
  randomplace: randomname.place()
} 
