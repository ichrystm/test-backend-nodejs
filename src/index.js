const express = require ('express');
const app = express();
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');

const port = 8080;
const database = require('./database/database');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', router);

app.listen(port, () => {
  console.log(`App online at port ${port}`);
})