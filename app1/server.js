const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is Application 1");
});

app.listen(port, () => {
  console.log(`App 1 running on port ${port}`);
});
