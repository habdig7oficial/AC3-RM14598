const { use } = require('express/lib/application')

module.exports = function(app){
    let usuarios = require('../models/usuarios')
    let atividades = require('../models/atividades')
    
    app.post('/atividades',async function(req,res){
        let dados = req.body
        //return console.log(dados)
        //conectar com o database

        //importar o model atividades
        const atividades = require("../models/atividades")
        //gravar as informações do formulário no database
        let gravar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            disciplina:dados.disciplina,
            instrucoes:dados.orientacoes,
            usuario:dados.id,
            titulo:dados.titulo
        }).save()
        //recarregar a página atividades
        res.redirect(`/atividades?id=${dados.id}`)
    })
    app.get('/atividades',async function (req,res){
        //listar todas as atividades do usuário logado
        let user = req.query.id
        if(!user){
            return res.redirect("/login")
        }


        let usuarios = require('../models/usuarios')
        let atividades = require('../models/atividades')

        /*Pegando todas as colections diferentes */
        let dadosUser = await usuarios.findOne({_id:user})
        let dadosAberto = await atividades.find({usuario:user,status:"0"}).sort({data:1})
        let dadosEntregue = await atividades.find({usuario:user,status:"1"}).sort({data:1})
        let dadosExcluido = await atividades.find({usuario:user,status:"2"}).sort({data:1})
        

        res.render('atividades.ejs',{nome:dadosUser.nome,id:dadosUser._id,dadosAberto,dadosEntregue,dadosExcluido})

        //res.render('atividades.ejs',{nome:dadosUser.nome,id:dadosUser._id,lista:dadosAtividades})
    })

    app.get('/excluir',async function(req,res){

        //qual documento será excluído da collection atividades???
        let doc = req.query.id

        //excluir o documento
        let excluir = await atividades.findOneAndUpdate(
            {_id:doc},
            {status:"2"}, /*Status de Exclusão */

            )


        //voltar para a lista de atividades
        res.redirect(`/atividades?id=${excluir.usuario}`)
    })

    //rota entregue
    app.get('/entregue',async function(req,res){
        //qual documento será excluído da collection atividades???
        let doc = req.query.id
        //excluir o documento
        let entregue = await atividades.findOneAndUpdate(
            {_id:doc},
            {status:"1"} /*Status de Entregue */
            )
        //voltar para a lista de atividades
        res.redirect(`/atividades?id=${entregue.usuario}`)
    })

        //rota desfazer
        app.get('/desfazer',async function(req,res){
            //qual documento será devolvido da collection atividades
            let doc = req.query.id
            //excluir o documento
            let desfazer = await atividades.findOneAndUpdate(
                {_id:doc},
                {status:"0"} /*Status em Aberto */
                )

                let alterado = await atividades.findOneAndUpdate(
                    {_id:doc},
                    {alterado:true} /*Status em Aberto */
                    )
            
            //voltar para a lista de atividades
            res.redirect(`/atividades?id=${desfazer.usuario}`)
        })
    
        app.get("/alterar",async function (req,res) {

            //recuperar o id da atividade na barra de endereco
            let id = req.query.id

            console.log(id)

    
            //procurar o id na colection atividades 

            let usuarios = require('../models/usuarios')
            let atividades = require('../models/atividades')

            let alterar = await atividades.findOne({_id:id})

            console.log(alterar)
    
            //localizar o proprietario da atividade
    
            let user = await usuarios.findOne({_id: alterar.usuario})

            console.log(user)
    
            //renderizar a view alterar e enviar o nome e id do usuario e todos os dados de atividades 
    
            res.render("alterar.ejs", {nome:user.nome, id:user._id, atividades:alterar} )
        })

        //gravar as alterações na atividade selecionada 

        app.post("/alterar", async function (req,res) {

            //let usuarios = require('../models/usuarios')
            //let atividades = require('../models/atividades')

            //armazenar as informaçãoes recebidas no formulario
            let dados = req.body

            //vizualizazr os dados 

            //res.send(dados)

            //atualizar o doc selecionado

            let atualizar = await atividades.findOneAndUpdate(
                {_id:dados.id},
                {
                    data:dados.data,
                    tipo: dados.tipo,
                    disciplina: dados.disciplina,
                    entrega: dados.entrega,
                    instrucoes: dados.orientacoes,

                    alterado:true
                }
                )

                console.log(dados)

                //voltar para atividades

                res.redirect(`/atividades?id=${dados.id_user}`)
        })

        

}