const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

app.use(express.static(path.join(__dirname+'/source')));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/source/index.html'));
});



app.listen(port, () => {
  console.log(`connected http://localhost:${port} !!!`)
})