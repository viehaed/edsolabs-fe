const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();


app.use(express.static(path.join(__dirname+'/test_lodash.js')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'))
})

app.get('/trang_con', (req,res) => {
    res.sendFile(path.join(__dirname+'/view/subindex.html'))
})
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
