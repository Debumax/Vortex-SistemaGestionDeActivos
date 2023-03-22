const connection = require('./../database/db');


const getAllEmployees = async (pagina, filtro) => {
    try {
        const context = await connection.getConnection();
        const limite = 5;
        const inicio = (pagina - 1) * limite;

        if (pagina==0 && filtro==0) {// me devuelve lo que un get tradicional  
            const resultado = await context.query("SELECT * from employee  ORDER BY last_name ASC");
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
                let sql = 'SELECT * FROM employee WHERE true ';
                let valores = [];
                const { nombre, apellido, finicio, ffin, rol } = filtro;

                if (nombre) {
                    sql += ' AND first_name = ? ';
                    valores.push(nombre)
                }
                if (apellido) {                    
                    sql += ' AND last_name = ? ';
                    valores.push(apellido)
                }
                if (finicio || ffin) {
                    if (finicio && ffin) { // si ambas fechas estan pasadas
                        sql += ' AND join_date BETWEEN ? AND ? ';
                        valores.push(finicio, ffin);
                    } else {
                        if (finicio) {
                            sql += ' AND join_date >= ?';
                            valores.push(finicio)
                        } else {
                            sql += ' AND join_date <= ? ';
                            valores.push(ffin);
                        }
                    }
                }
                if (rol) {
                    console.log("en el condicional de rol ")
                    sql += ' AND rol = ? ';
                    valores.push(rol);
                }

                sql += `ORDER BY last_name ASC LIMIT ${limite}  OFFSET ${inicio} `;
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
                const cantidadDB = await context.query(`SELECT * from employee`);
                const cantidadRow = cantidadDB.length;
                const cantPag = Math.ceil(cantidadRow / limite);

                const resultado = await context.query(`SELECT * from employee  ORDER BY last_name ASC LIMIT ${limite}  OFFSET ${inicio} `);

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

const getEmployeById = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("SELECT * FROM employee WHERE id_employee=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

const createEmploye = async (empleado) => {
    try {
        const { first_name, last_name, cuit, team_id, join_date, rol } = empleado;
        const context = await connection.getConnection();

        const resultado = await context.query("INSERT INTO employee( first_name, last_name, cuit, team_id, join_date, rol) VALUES (?,?,?,?,?,?)", [first_name, last_name, cuit, team_id, join_date, rol]);
        return (resultado);
    } catch (error) {

    }
};

const updateEmployee = async (id, empleado) => {
    try {
        const context = await connection.getConnection();
        const { first_name, last_name, cuit, team_id, join_date, rol } = empleado;
        
        const resultado = context.query("UPDATE employee SET first_name = IFNULL(?,first_name), last_name = IFNULL(?,last_name), cuit = IFNULL(?,cuit), team_id = IFNULL(?,team_id), join_date = IFNULL(?,join_date), rol = IFNULL(?,rol) WHERE id_employee=?",
                                         [first_name, last_name, cuit, team_id, join_date, rol, id]);
        return (resultado);
    } catch (error) {

    }
};

const deleteEmployee = async (id) => {
    try {
        const context = await connection.getConnection();
        const resultado = await context.query("DELETE FROM employee WHERE id_employee=?", [id]);
        return (resultado);
    } catch (error) {

    }
};

module.exports = {
    getAllEmployees,
    getEmployeById,
    createEmploye,
    updateEmployee,
    deleteEmployee
}