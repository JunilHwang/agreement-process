// import dependency
const express = require('express');
const bodyParser = require('body-parser');

// app setting
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// routes
const member = require('./routes/member')

// routing
app.use('/api/member', member)

// run app
app.listen(3000, () => {
  console.log('Express server has stated on port 3000');
})