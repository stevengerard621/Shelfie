require('dotenv').config();
const express = require("express"),
      app = express();
      app.use(express.json());
      massive = require('massive'),
      controller = require('./controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.get('/api/products', controller.getProducts);
app.post('/api/products', controller.create)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} DB CONNECTED`))
}).catch(err => console.log(err, 'DATABASE DOWN'))