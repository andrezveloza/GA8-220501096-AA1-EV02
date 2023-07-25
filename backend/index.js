require ('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

// express
const app = express();

// Admitir tipos de datos Json

app.use(express.json());


/*
CORS ( Cross-Origin Resource Sharing ) es un mecanismo de seguridad que permite que los recursos de un dominio sean accesibles desde otro dominio. Al habilitar CORS, se permiten las solicitudes de recursos desde cualquier origen (representado por "*") y se especifican los métodos HTTP permitidos, los encabezados aceptados y otros detalles de autenticación.
*/

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    // Agregar la cabecera Content-Type para admitir datos de formulario
    res.header("Content-Type", "multipart/form-data");

      next();
    });

  
// Config

app.set('port', port)


// Rutas
app.use('/api', require('./rutas'))

// Iniciar express

app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('error al iniciar el servidor: ' + error)
    } else{
        console.log('servidor iniciado en el puerto: ' + port)
    }
})