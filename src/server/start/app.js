/*
 * @file: file description
 * @author: your name
 * @Date: 2021-12-26 18:40:31
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 19:47:20
 */

const mongoose = require('mongoose');
const express = require("express")
const { getAvailablePort } = require("./utils")

const app = express()
const PORT = process.env.PORT || 3000

const dbURI = "mongodb+srv://yuChen:5201314kly@cluster0.n4rle.mongodb.net/playlist_manager?retryWrites=true&w=majority";

const listen = () => {
  getAvailablePort(PORT).then(port => {
    process.env.PORT = port;
    app.listen(port, () => {
      console.log(
        `
          ${('访问链接 (按住 Command or Ctrl 点击):')}
          ${(`http://localhost:${port}`)}
        `
      );
    });
  })
}

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connected to mongodb");
    listen();
  })
  .catch((err) => {
    console.log("error: ", err)
  }); 
  
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://yuChen:<password>@cluster0.n4rle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
