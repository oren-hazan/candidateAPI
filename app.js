const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const connectDB = require('./db/mongoConnect');
require("dotenv").config();

connectDB();

const userRoute = require('./routes/userRoute');
app.use("/api", userRoute)

 /*const parse = require('./parser');
 app.post('/api/user/create', parse.parsedAndCreate)*/


const port = process.env.PORT;
server.listen(port, ()=> {
  console.log(`listening on port:${port}`);
});

