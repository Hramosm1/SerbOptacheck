const express = require('express');
const controller = require('../controller/controller');
const md_auth = require('../middleware/aunthenticated')

const app = express();

// app.get('/node/express/myapp/getData',controller.getDate)

// app.get('/node/express/myapp/foo', function (req, res) {
//     res.send('Hello from foo! [express sample]');
// });

// app.get('/node/express/myapp/bar', function (req, res) {
//     res.send('Hello from bar! [express sample]');
// });

// app.get('/node/express/myapp/prueba', function (req, res) {
//     res.send('vamos a ver si funciona esta cosa');
// });

// app.get('/node/express/myapp/api/getAllData',md_auth.ensureAuth,controller.getAllData);

app.get("/node_optacheck/myapp",controller.ComboDepartamento)

app.post("/node_optacheck/myapp/api/recagua/v1/token",controller.createToken);

app.post("/myapp/api/recagua/v1/workspace/content",md_auth.ensureAuth,controller.executeProcedure);
 
module.exports = app; 