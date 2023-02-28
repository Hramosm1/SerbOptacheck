// const sql = require('mssql/msnodesqlv8');

//Parametros para conexion a la base datos
// const config = {
//     database: 'WS_InteligenciaDB_Fase2',
//     server:'192.168.8.8\\saplicaciones',
//     user:'jchavez',
//     password:'moAU{CRGa0',
//     port: 1433, //Default port for sql server
//     options:{
//         encrypt: false, //if on windows Azure will set to true
//         //trustedConnection:true,
//     }
// }

//Conexion
// const poolPromise = new sql.ConnectionPool(config).connect().then(pool =>{
//     console.log('Connected to MSSQL');
//     return pool;
// }).catch(err => console.log('Database Connection Failed! Bad Config: ',err));

// module.exports = {
//     sql,
//     poolPromise
// }