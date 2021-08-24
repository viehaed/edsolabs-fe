const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');


app.set('views', path.join(__dirname, 'resources\\views'));
console.log(__dirname, 'resources\\views');
app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})