var express = require ('express');
var app = express();
var router = require('./routes/routes.js');
var bodyParser = require('body-parser');

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', router);

app.listen(port, () => {
  console.log(`App online at port ${port}`);
})