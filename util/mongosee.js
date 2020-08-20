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

         
       }
    }