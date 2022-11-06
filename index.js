require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

// Connect MongoDB
mongoose.connect(process.env.mongodbConnectString);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Deposit System is running');
});

app.listen(port, () => {
  console.log(`Deposit System is listening on port ${port}!`);
});

// Load routers
app.use('/api', routes);
