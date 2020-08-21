const mongoose = require('mongoose');



   module.exports = {
       init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          useFindAndModify: false
         };

          mongoose.connect(process.env.MONGO_URL)
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