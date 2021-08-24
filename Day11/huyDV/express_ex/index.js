const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'contact.html'))
})

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname,'product.html'))
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})