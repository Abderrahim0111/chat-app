const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes')
var cookieParser = require('cookie-parser')
var cors = require('cors')
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(cors())
app.use(cookieParser())


mongoose
  .connect(
    "mongodb+srv://abderrahimdefaoui:fbpFmRUFDTAf4eJb@cluster0.lyt4xrw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
    res.send('working')
})


app.use(userRoutes)

