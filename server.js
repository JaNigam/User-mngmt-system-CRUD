//creating the http server
//for theis we need the express module
const express = require("express");
// const dotenv = require('dotenv');
// dotenv.config({ path: 'config.env' })
const morgan = require('morgan');
require('dotenv').config({ path: 'config.env' })
const app = express();
const bodyparser = require('body-parser')
const path = require('path');


const PORT = process.env.PORT || 8080

//connection db
const connectDB = require("./server/database/connection")

// to display log requests in the terminal
app.use(morgan('tiny'))


//mongodb connection
connectDB();

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//set view engine
app.set("view engine", 'ejs')

//load routers
app.use('/', require('./server/routes/router'))


app.listen(process.env.PORT, () => { console.log(`server is running on http://localhost:${PORT}`) });