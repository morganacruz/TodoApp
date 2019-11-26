const mongoose = require('mongoose')
//mapeamento dos objetos em js
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')