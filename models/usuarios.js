const mongoose = require("mongoose")

const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String,
    
    dataCadastro: {type:Date, default:Date.now}
})

const usuarios = mongoose.model("usuarios",modelo)

module.exports = usuarios