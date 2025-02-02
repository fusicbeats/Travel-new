import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  res.send("Hello this is home");
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});