import express from "express"
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Numariq</h1>")
  })

  app.get('/about', (req, res) => {
    res.send("<h1>i am student</h1>")
  })

  app.get('/contact', (req, res) => {
    res.send("<h1>numariqsyed48@gmail.com</h1>")
  })

  app.get('/address', (req, res) => {
    res.send("<h1>srinagar</h1>")
  })

app.listen(port,()=>{
    console.log(`Server Running on port ${port}.`);
})