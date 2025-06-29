const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is Application 3");
});

app.listen(port, () => {
  console.log(`App 3 running on port ${port}`);
});
