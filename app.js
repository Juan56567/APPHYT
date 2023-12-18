const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/routes");
const db = require("./db/db");

app.set("view engine", "ejs");
app.use(router);


app.listen(port, () => {
  console.log("http://localhost:3000");
  db.start();
});
