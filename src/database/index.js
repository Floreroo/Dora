const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.MONGO_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}, function(err){
    if(err) {
    console.error(err)
    return;
}

console.log(`Conectado correctamente a MongoDB`)
})