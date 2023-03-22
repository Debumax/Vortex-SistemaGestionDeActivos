const modelAsset = require("../models/asset");
const modelEmployee = require("../models/employee")
const ErrorResponse = require("../helpers/ErrorResponse");



const getAllAssets = async (req, res,next) => {
    try {
        
        if (Object.keys(req.query).length === 0) { // no le paso ningun query solo para poder ver todos los elementos

            const asset = await modelAsset.getAllAssets(0, 0);
            res.json({
                totalRow: asset.totalRow,
                data: asset.resultado
            });
        } else {
            if (Object.keys(req.query).length === 1 && (req.query.pagina != undefined)) {//numero de pagina 
                const pagina = parseInt(req.query.pagina);
                const asset = await modelAsset.getAllAssets(pagina, 0);
                res.json({
                    paginastotal:asset.cantPag,
                    data: asset.resultado
                });


            } else {
                //console.log("estoy en la parte grosa  ")
                const { pagina, nombre, tipo, codigo, marca, descripcion, fecha_compra_inicio , fecha_compra_fin } = req.query;

                const filtro = {  nombre, tipo, codigo, marca, descripcion, fecha_compra_inicio , fecha_compra_fin };

                const asset= await modelAsset.getAllAssets(pagina, filtro);
                res.json({
                    paginastotal: asset.cantPag,
                    data: asset.resultado
                });
            }

            
        }
    } catch (error) {
        next(
            res.status(500).json({ mensaje: 'error interno' })
            
        );
    }

};


const getAssetsByEmployeeId = async (req, res,next) => {
    try {
        const { id } = req.params;
        const asset = await modelAsset.getAssetsByEmployeeId(id);

        
        if (asset.length) {
            res.json({ data: asset });
        } else {
            res.status(404).json({ mensaje: " no se encontro asset con id de empleado ingresado" })
        }
        
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

const getAssetById = async (req, res,next) => {
    try {
        const { id } = req.params;
        const asset = await modelAsset.getAssetById(id);
        if (asset.length != 0) {

            res.json({ data:asset });
        }
        else {
            res.status(404).json({ mensaje: "el asset no existe " })
        }
        
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};
const createAsset = async (req, res,next) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = req.body;
        const item = { id_empoyee_asset, name, type, code, marca, description, purchase_date };
        
        const empleado = await modelEmployee.getEmployeById(id_empoyee_asset);
        
        if (empleado.length!=0) {

            const item_creado = await modelAsset.createAsset(item);
            const asset = await modelAsset.getAssetById(item_creado.insertId);
            res.status(201).json({ data: asset });
        } else {
            res.status(404).json({ mensaje: "empleado no encontrado " });
        }

    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

const updateAsset = async (req, res,next) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = req.body;
        const { id } = req.params;
        const item = { id_empoyee_asset, name, type, code, marca, description, purchase_date };
        
        const getasset = await modelAsset.getAssetById(id);
        const empleado = await modelEmployee.getEmployeById(id_empoyee_asset);
        if (id_empoyee_asset=== null ) {
            const item_actualizado = await modelAsset.updateAsset(id, item);
        }

        if (getasset.length !=0 && empleado.length!=0) {
            const item_actualizado = await modelAsset.updateAsset(id, item);
            const getasset = await modelAsset.getAssetById(id);
            res.json({ 
                mensaje: "actualizado con exito",
                data: getasset });
        } else {
            res.status(404).json({ mensaje: "UPS!! el asset o el empleado ingresado no existe  " })
        }
    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

const deleteAsset = async (req, res,next) => {
    try {
        const { id } = req.params;
        const getasset = await modelAsset.getAssetById(id);
        if (getasset.length) {
            const asset = await modelAsset.deleteAsset(id);
            res.status(200).json({ 
                mensaje: "se eliminno con exito"});
        } else {
            res.status(404).json({ mensaje: "UPS!! el asset no existe " })
        }

    } catch (error) {
        next( 
            new ErrorResponse('error en controllador', 500 )
        );
    }
};

module.exports = {
    getAllAssets,
    getAssetsByEmployeeId,
    getAssetById,
    createAsset,
    updateAsset,
    deleteAsset
}