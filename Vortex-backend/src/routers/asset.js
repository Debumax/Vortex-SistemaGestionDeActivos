const express = require('express');
const ruta = express.Router();
const { validacionCreateAss , validacionIdAss , validacionUpdateAss} = require('../validacion/asset');

const { getAllAssets,
    getAssetsByEmployeeId,
    getAssetById,
    createAsset,
    updateAsset,
    deleteAsset
} = require('./../controllers/asset');

ruta.route('/')
    .get(getAllAssets)
    .post(validacionCreateAss,createAsset)


ruta.route('/:id')
    .get(validacionIdAss,getAssetById)
    .patch(validacionUpdateAss,updateAsset)
    .delete(validacionIdAss,deleteAsset)

ruta.route('/employee/:id')
.get(validacionIdAss,getAssetsByEmployeeId)

module.exports = ruta;