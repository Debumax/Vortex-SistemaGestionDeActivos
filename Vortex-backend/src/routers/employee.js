const express = require('express');
const ruta = express.Router();
const {validacionCreate,validacionId,validacionUpdate} = require('./../validacion/employee');

const { getAllEmployees,
getEmployeById,
createEmploye,
updateEmployee,
deleteEmployee } = require('./../controllers/employee');

ruta.route('/')
.get(getAllEmployees)
.post(validacionCreate,createEmploye)


ruta.route('/:id')
.get(validacionId,getEmployeById)
.patch(validacionUpdate,updateEmployee)
.delete(validacionId,deleteEmployee)

module.exports=ruta;