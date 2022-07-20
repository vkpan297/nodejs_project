const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    var a=1;
    var b=2;
    var c=a+b+1;
  return res.send('Hello World!');
})

//127.0.0.1 - port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})