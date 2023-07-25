const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'GA8-220501096-AA1-EV01',
});

conexion.connect((err) => {
    if (err) {
        console.log('error conectando con la base de datos' + err)
    } else {
        console.log('la base de datos está conectada')
    }
});

module.exports = conexion;
