const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/trangchu', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html');
})

app.get('/about', function (req, res) {
    res.send('about!')
})

app.get('/contact', function (req, res) {
    res.send('contact!')
})

app.get('/product', function (req, res) {
    res.send('product!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})