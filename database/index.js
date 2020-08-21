const mongoose = require('mongoose');



   module.exports = {
       init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          useFindAndModify: false
         };

          mongoose.connect('mongodb+srv://admin:KASake1234@algo.6dofj.mongodb.net/Cosas?retryWrites=true&w=majority')
        mongoose.Promise = global.Promise;
        mongoose.connection.on('connected', () => {
       console.log('Conectado a mongoDB!');
        });

        mongoose.connection.on('err', err => {
        console.error(`Error al conectar con mongoDB: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
          console.warn('Se ha perdido la conexion de MongoDB');

        });
       }
    }