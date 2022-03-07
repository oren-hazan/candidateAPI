const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const connectDB = require('./db/mongoConnect');
require("dotenv").config();
const cors = require('cors');
const upload = require('./utils/upload')

connectDB();
app.use(cors()); 

const userRoute = require('./routes/userRoute');

app.use("/api", upload.single("file"), (req, res, next) => {
    console.log(req.file);
    next();
}, userRoute)

//app.use("/api", userRoute)

const port = process.env.PORT || 8080;
server.listen(port, ()=> {
  console.log(`listening on port:${port}`);
});

