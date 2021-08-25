const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Trang chủ')
})

app.get('/about', function (req, res) {
    res.send('about!')
})

app.get('/contact', function (req, res) {
    res.send('Hello World!')
})

app.get('/product', function (req, res) {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})