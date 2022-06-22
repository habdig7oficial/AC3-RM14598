const mongoose = require("mongoose")








const mongo = async function () {
    /*console.log(process.env)*/
    /*const atlas = await mongoose.connect(process.env.SCRIPTBD)*/
    const atlas = await mongoose.connect("mongodb+srv://root:Santinho111@habdig7oficial-cluster.ccizs.mongodb.net/todo_list?retryWrites=true&w=majority")
    //await mongoose.connect('mongodb://localhost/to_do_list')
}


module.exports = mongo