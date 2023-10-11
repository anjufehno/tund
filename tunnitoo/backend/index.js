const express = require("express");
const app = express();
const port = 8000;
const catsRoutes = require("./routes/cat.routes");

app.use(express.json());
app.use("/cats", catsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World 2023!");
});

app.get("/flights/:from-:to", (req, res) => {
  res.send({
    params: req.params,
    body: req.body,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
