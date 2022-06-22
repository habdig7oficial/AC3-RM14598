module.exports = function (app) {
    //rota que renderiza o index (tipo render)
    app.get('/',function (req,res){
        res.render('index.ejs')
    })

    app.get('/index.html',function(req,res){
        res.render('index.ejs')
    })

    app.get('/index',function (req,res){
        res.render('index.ejs')
    })
}