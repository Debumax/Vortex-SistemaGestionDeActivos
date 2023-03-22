const connection = require('./../database/db');

const getAllAssets = async (pagina,filtro) => {
    try {
        const context = await connection.getConnection();
        const limite = 5;
        const inicio = (pagina - 1) * limite;

        if (pagina==0 && filtro==0) {// me devuelve lo que un get tradicional  
            const resultado = await context.query("SELECT * from asset  ORDER BY name ASC");
            const totalRow= resultado.length;
           const respuesta = {
            totalRow,
            resultado
           }
            return respuesta;
        } else {

            if (Object.keys(filtro).length !== 0) {
                //hago el filtrado + paginacion en orden asce 
                //la paginacion depende de la consulta
                let sql = 'SELECT * FROM asset WHERE true ';
                let valores = [];
                const { nombre, tipo, codigo, marca, descripcion, fecha_compra_inicio , fecha_compra_fin } = filtro;

                if (nombre) {
                    sql += ' AND name = ? ';
                    valores.push(nombre)
                }
                if (tipo) {                    
                    sql += ' AND type = ? ';
                    valores.push(tipo)
                }
                if (codigo) {                    
                    sql += ' AND code = ? ';
                    valores.push(codigo)
                }
                if (marca) {                    
                    sql += ' AND marca = ? ';
                    valores.push(marca)
                }
                if (descripcion) {                    
                    sql += ' AND description = ? ';
                    valores.push(descripcion)
                }
                if (fecha_compra_inicio  ||fecha_compra_fin) {
                    if (fecha_compra_inicio  && fecha_compra_fin) { // si ambas fechas estan pasadas
                        sql += ' AND purchase_date BETWEEN ? AND ? ';
                        valores.push(fecha_compra_inicio, fecha_compra_fin);
                    } else {
                        if (fecha_compra_inicio ) {
                            sql += ' AND  purchase_date >= ?';
                            valores.push(fecha_compra_inicio)
                        } else {
                            sql += ' AND purchase_date <= ? ';
                            valores.push(fecha_compra_fin);
                        }
                    }
                }

                sql += `ORDER BY name ASC LIMIT ${limite}  OFFSET ${inicio} `;
                const resultado = await context.query(sql, valores);     
                const cantidadRow = resultado.length;
                const cantPag = Math.ceil(cantidadRow / limite);

                const respuesta = {
                    cantPag,
                    resultado
                }
                return respuesta

            } else {
                // hago solo paginacion y muestro de forma asc por apellido
                const cantidadDB = await context.query(`SELECT * from asset`);
                const cantidadRow = cantidadDB.length;
                const cantPag = Math.ceil(cantidadRow / limite);

                const resultado = await context.query(`SELECT * from asset  ORDER BY name ASC LIMIT ${limite}  OFFSET ${inicio} `);

                const respuesta = {
                    cantPag,
                    resultado
                }
                return (respuesta);
            }
        }
    } catch (error) {

    }
};

const getAssetById = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT * FROM asset WHERE id_asset=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

const getAssetsByEmployeeId = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT ass.id_asset, ass.id_empoyee_asset, ass.name, ass.type, ass.code, ass.marca, ass.description, ass.purchase_date FROM asset ass INNER JOIN employee on ass.id_empoyee_asset=employee.id_employee WHERE employee.id_employee=?;", [id]);
        return (resultado);
    } catch (error) {
        
    }
 };

const createAsset = async (item) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = item;
        const context = await connection.getConnection();

        const resultado = await context.query("INSERT INTO asset( id_empoyee_asset, name, type, code, marca, description, purchase_date) VALUES (?,?,?,?,?,?,?)", [id_empoyee_asset, name, type, code, marca, description, purchase_date]);
        //si es que recibe null , lo carga , sino no carga nada
        return (resultado);
    } catch (error) {

    }
};

const updateAsset = async (id, item) => {
    try {
        const { id_empoyee_asset, name, type, code, marca, description, purchase_date } = item;
        const context = await connection.getConnection();
        console.log("en el modelo",item)
        if (id_empoyee_asset===null) {
            const resultado = context.query("UPDATE asset SET id_empoyee_asset = null,name=IFNULL(?,name),type=IFNULL(?,type),code=IFNULL(?,code),marca=IFNULL(?,marca),description=IFNULL(?,description),purchase_date=IFNULL(?,purchase_date) WHERE id_asset=?", [ name, type, code, marca, description, purchase_date, id]);
            
        } else {
            const resultado = context.query("UPDATE asset SET id_empoyee_asset=IFNULL(?,id_empoyee_asset),name=IFNULL(?,name),type=IFNULL(?,type),code=IFNULL(?,code),marca=IFNULL(?,marca),description=IFNULL(?,description),purchase_date=IFNULL(?,purchase_date) WHERE id_asset=?", [id_empoyee_asset, name, type, code, marca, description, purchase_date, id]);

        }
        return (resultado);
    } catch (error) {

    }
};

const deleteAsset = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("DELETE FROM asset WHERE id_asset=?", [id]);
        return (resultado);
    } catch (error) {

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