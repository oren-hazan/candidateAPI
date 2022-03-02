const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const port = "3000";
const server = http.createServer(app);
server.listen(port);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Candidate_details');
  //console.log("mongo connect");
}

app.get("/", (req,res) => {
    res.json({msg: "candidate details like-", id: "", email: "", phoneNumber: "", linkedinProfile: ""})
})

