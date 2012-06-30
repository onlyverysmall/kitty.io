var express = require('express')

var app  = express.createServer()
  , port = 8000

app.use(express.static(__dirname + '/public/'))
app.allowedDomains = '*'
app.listen(port)
console.log('App is listening on port ' + port)

