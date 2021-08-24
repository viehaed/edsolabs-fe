const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Template Engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/news/:id', (req, res) => {
  res.render('newsParams');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


