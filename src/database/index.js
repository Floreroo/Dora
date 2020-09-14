const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb+srv://admin:KASake1234@algo.6dofj.mongodb.net/algo?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}, function(err){
    if(err) {
    console.error(err)
    return;
}

console.log(`Conectado correctamente a MongoDB`)
});