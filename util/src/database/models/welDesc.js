const { Schema, model, Mongoose } = require('mongoose')//llamamos a nuestro paquete

const welDesc = new Schema({ //empezamos a crear el Schema
	gID: { type: String, required: true }, //este seria la id del servidor
	gWelDes: {type: String, required: true}// este seria la descripción de las bienvenidas
})

module.exports = Mongoose.model("welDesc", welDesc)