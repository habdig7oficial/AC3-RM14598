module.exports = function (app){

    //abrir o arquivo login.ejs
    app.get('/login',function (req,res){
        res.render('login.ejs')
    })

    //validar o usuário e senha
    app.post('/login',async function (req,res){
        //recuperar as informações digitadas no formulário
        let dados = req.body

        //conectar com o banco de dados
        let database = require('../config/database')()

        //selecionar a model usuarios
        let usuarios = require('../models/usuarios')

        //verificar se o email está cadastrado
        let verificar = await usuarios.findOne({email:dados.email})

        if(!verificar){
            return res.send(`Email: ${dados.email} não está Cadastrado! `)
        }

        let cript = require('bcryptjs')
        let comparar = await cript.compare(dados.senha,verificar.senha)
        if(!comparar){
            console.log(`\nSenha Inputada: ${dados.email}\nSenha do Email:${verificar.senha}`)
            return res.send(`Senha ${dados.senha} Inválida!`)
        }
        //redirecionar para a rota atividades (precisa enviar o id)
        res.redirect(`/atividades?id=${verificar._id}`)
        })
}