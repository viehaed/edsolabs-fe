const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact',(req,res)=>{
  res.sendFile(path.join(__dirname+'/contact.html'));
});
router.get('/page',(req,res)=>{
  res.sendFile(path.join(__dirname+'/page.html'));
});
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})