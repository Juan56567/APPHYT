const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/routes")


app.set("view engine", "ejs");
app.use(router);
require('dotenv').config({path:"./env/.env"})
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())




const database = process.env.database
const host = process.env.host
const user = process.env.user
const password = process.env.password



app.listen(port, () => {
  console.log("http://localhost:3000");
  console.log(user,database,host,password)
});
