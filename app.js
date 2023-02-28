const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs =require('fs');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/route');
var app = express();

app.use(cors());

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse application/json
app.use(bodyParser.json());

//app.use(morgan('dev'));

//create a write stream (in append mode)
//var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })

//app.use(morgan('combined', { stream: accessLogStream }))
app.use(router)

const port = 9200;

app.listen(process.env.PORT || port, (err) =>{
	if(err)
		console.log('Unable to start the server!');
	else
		console.log('server started running on :' + port);
})
