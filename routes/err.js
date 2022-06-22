module.exports = function (app) {
    app.use(function(err, req, res, next) {
        console.error("oppppssss")
        console.error(err.stack);
        res.status(500).send(`Alguma coisa errada ocorreu tente denovo por favor\nPS:Por Favor sor não me dá 0 \n\n ${err.stack}`);
      });
}
