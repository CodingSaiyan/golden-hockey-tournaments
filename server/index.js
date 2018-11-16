require('dotenv').config();
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session');

let { CONNECTION_STRING, APP_PORT, SESSION_SECRET } = process.env;

app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Golden db connected!')
  })


  




app.listen(APP_PORT, () => {console.log(`Skating at ${APP_PORT} MPH!`)})