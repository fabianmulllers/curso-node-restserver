const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //conectar a BD
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.router();
    }

    async conectarDB(){

        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parceo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    router(){
      
        this.app.use(this.usuariosPath , require( '../routes/user' ) );

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }

}

module.exports = Server