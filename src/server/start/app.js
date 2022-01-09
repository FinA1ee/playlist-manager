/*
 * @file: file description
 * @author: your name
 * @Date: 2021-12-26 18:40:31
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 22:20:22
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