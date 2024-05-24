import express from "express"
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("<h1>Numariq Syed</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/numariq", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/numariq", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/numariq", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

