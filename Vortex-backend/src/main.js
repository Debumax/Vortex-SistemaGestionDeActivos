const express =require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const employee= require('./routers/employee');
const asset= require('./routers/asset');

////////////////////
//config de variables de entorno
dotenv.config();
////////////////////
const app= express();
app.use(cors());

// settings 
app.set("PORT",process.env.PORT) ;

//middlewares
app.use(morgan("dev")); // permite en la consola ver las peticiones y resp 
app.use(express.json({ limit: '50mb'}));
//app.use(express.urlencoded({limit: '25mb', extended: true}));


//rutas
app.use("/api/Empoyee",employee);
app.use("/api/Asset",asset);

app.use("*", (req, res) => {
    const err = Error(`Requested path ${req.baseUrl} not found`);
    res.status(404).send({
    success: false,
    message: `el path ${req.baseUrl} no funciona`,
    stack: err.stack,
    });
  
    });

module.exports= app; // para luego usarlo en un archivo index.js

