const { check , param } = require('express-validator');
const { validacionResult } = require('./validacionResponse');

// id_empoyee_asset, name, type, code, marca, description, purchase_date ,id_asset

const validacionCreateAss = [
    
    check('name').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('type').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('code').isString(),
    check('marca').isString(),
    check('description').exists().not().isEmpty().isString(),//probar
    check('purchase_date').isDate(),
    (req,res,next)=>{
        validacionResult(req,res,next)
    }

];

const validacionIdAss= [
    param('id').toInt().exists().not().isEmpty().isNumeric(),
    (req,res,next) => {
        validacionResult(req,res,next) // manda mensaje de error
    }
];


const validacionUpdateAss = [
    param('id').toInt().isNumeric(),
    check('name').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('type').exists().not().isEmpty().isString().isLength({ min: 2, max: 50 }),
    check('description').isString(),//probar
    check('purchase_date').isDate(),
    (req,res,next) => {
        validacionResult(req,res,next) // manda mensaje de error
    }
];




module.exports = { 
    validacionCreateAss,
    validacionIdAss,
    validacionUpdateAss
} 