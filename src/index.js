const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

//Routes init
route(app);

//127.0.0.1 - port
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})