const express = require('express');
const HTTP_SERVER = express();
const bodyParser = require('body-parser')
require('dotenv').config()


HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }))

HTTP_SERVER.use(bodyParser.json())

require('./Database/dbConfig')


const port = 5000;

  

HTTP_SERVER.listen(port, '0.0.0.0', () => {
  console.log('SERVER STARTED', port);
 
});

HTTP_SERVER.use('/', require('./app'));



