const { check , param } = require('express-validator');
const { validacionResult } = require('./validacionResponse');

//first_name, last_name, cuit, team_id, join_date, rol

const validacionCreate = [
    check('first_name').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('last_name').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('cuit').exists().not().isEmpty().isString().isLength({ min: 12, max:15 }),
    check('team_id').exists().not().isEmpty().isNumeric(),
    check('join_date').exists().not().isEmpty().isDate(),
    check('rol').exists().not().isEmpty().isString().isLength({ min: 2, max: 30 }),
    (req,res,next)=>{
        validacionResult(req,res,next)
    }

];

const validacionId= [
    param('id').toInt().exists().not().isEmpty().isNumeric(),
    (req,res,next) => {
        validacionResult(req,res,next) // manda mensaje de error
    }
];


const validacionUpdate = [
    param('id').toInt().exists().not().isEmpty().isNumeric(),
    
    check('first_name').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('last_name').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('cuit').exists().not().isEmpty().isString().isLength({ min: 12, max:15 }),
    check('team_id').exists().not().isEmpty().isNumeric(),
    check('join_date').exists().not().isEmpty().isDate(),
    check('rol').exists().not().isEmpty().isString().isLength({ min: 2, max: 30 }),
    (req,res,next) => {
        validacionResult(req,res,next) // manda mensaje de error
    }
];


module.exports = { 
    validacionCreate,
    validacionId,
    validacionUpdate
} 