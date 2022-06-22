const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: false }))

const porta = process.env.PORT || 7777

const consign = require("consign")

let router = consign().include("./routes").into(app)

const static = app.use(express.static("./assets"))



//console.log(express.urlencoded({ extended: false }))

module.exports = {app,porta}


