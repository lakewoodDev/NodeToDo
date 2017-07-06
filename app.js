var express = require('express')
var mongoose = require('mongoose')
var app = express()
var config = require('./config')
var setupCtrl = require('./controllers/setupController')
var apiController = require('./controllers/apiController')

var port = process.env.PORT || 3000;
app.use('/public', express.static(__dirname + '/public'))
app.set('view engine', 'vash')

mongoose.connect(config.getDbConnectionString())
setupCtrl(app)
apiController(app)

app.listen(port);