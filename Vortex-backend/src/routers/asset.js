const express = require('express');
const ruta = express.Router();
const { validacionCreateAsset , validacionIdAsset , validacionUpdateAsset} = require('../validacion/asset');

const { getAllAssets,
    getAssetsByEmployeeId,
    getAssetById,
    createAsset,
    updateAsset,
    deleteAsset
} = require('./../controllers/asset');

ruta.route('/')
    .get(getAllAssets)
    .post(validacionCreateAsset,createAsset)


ruta.route('/:id')
    .get(validacionIdAsset,getAssetById)
    .patch(validacionUpdateAsset,updateAsset)
    .delete(validacionIdAsset,deleteAsset)

ruta.route('/employee/:id')
.get(validacionIdAsset,getAssetsByEmployeeId)

module.exports = ruta;