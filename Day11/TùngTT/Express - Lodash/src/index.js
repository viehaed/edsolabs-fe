const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')
const port = 3000;

app.use(morgan('combined'))

// render img

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'index.js')));

// render content
app.engine('handlebars',handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

// render page
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/', (req, res) => {
  res.render('about')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


