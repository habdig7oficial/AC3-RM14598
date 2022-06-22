module.exports = function(app){
    //abrir o arquivo registro.ejs
    app.get('/registro', function (req,res){
        res.render('registro.ejs')
    })

    //gravar as informações digitadas no mongoAtlas
    app.post('/registro',async function (req,res){
        //recuperar as informações digitadas
        let dados = req.body

        //importar as configurações do database
        let database = require('../config/database')()

        //definir em qual coleção vamos gravar
        let usuarios = require('../models/usuarios')
        
        //verificar se o email já está cadastrado
        let verificar = await usuarios.findOne({email:dados.email})
        if(verificar){
           return res.send(`Email ${dados.email} já cadastrado`)
        }
        
        //criptografar a senha
        let cript = require("bcryptjs")
        let senhasegura = await cript.hash(dados.senha,10)

        console.log(`\nSenha: ${dados.senha}\nHash: ${senhasegura}`)
        
        //gravar o documento
        let documento = await new usuarios({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura
        }).save()
        res.redirect('/login')
    })
}