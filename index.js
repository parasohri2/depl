require('dotenv').config()
console.log("paras");
//npm init for json pack

const express = require('express');
const { url } = require('inspector');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hello from twit')
})
app.get('/todo',(req,res)=>{
    res.send ('window.open(url("https://parasohri2.github.io/todo/"))')
}
)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT} `)
})