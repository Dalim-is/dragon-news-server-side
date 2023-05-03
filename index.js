const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const catogories = require("./catogory/catagories.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("dragon is comming");
});

app.get("/catogory", (req, res) => {
  res.send(catogories);
});
app.listen(port, () => {
  console.log(`dragon api running on port: ${port}`);
});
