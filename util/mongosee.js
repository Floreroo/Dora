const mongoose = require('mongoose');



   module.exports = {
       init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           autoIndex: false,
           reconnectTries: Number.MAX_VALUE,
           recconnectInterval: 500,
           poolSize: 5,
           connectTimeoutMS: 10000,
           family: 4
         };

          mongoose.connect('mongodb+srv://admin:KASake1234@algo.6dofj.mongodb.net/algo?retryWrites=true&w=majority', dbOptions)
        mongoose.set('userFindAndModify', false);
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