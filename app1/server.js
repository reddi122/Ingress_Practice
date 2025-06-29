const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Application 3</title>
      <style>
        body {
          background: linear-gradient(to right, #00c6ff, #0072ff);
          height: 100vh;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: Arial, sans-serif;
          font-size: 2rem;
          text-align: center;
        }
        .container {
          background: rgba(0, 0, 0, 0.3);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        }
      </style>
    </head>
    <body>
      <div class="container">
        Hello, this is <strong>Home Page</strong>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Home Page running on port ${port}`);
});
