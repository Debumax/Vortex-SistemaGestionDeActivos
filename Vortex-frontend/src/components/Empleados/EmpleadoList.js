import React from "react";
import { useSelector } from "react-redux";
import FilaEmpleado from "../FilaEmpleado";


const EmpleadoList = () => {
   
    const empleadosApi=useSelector(state => state.listaEmpleados)


    const listado = () => {  
        return empleadosApi.empleados.map(emp => {
            return <FilaEmpleado emp={emp} key={emp.id_employee} />;
        });
    };

    return (
        <main style={{ marginBottom: '-5px' }}>
            <div className="container">
                <div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cuit</th>
                                <th>Rol</th>
                                <th>Fecha de Ingreso</th>
                                <th>Team_id</th>
                                <th>Opcions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider ">
                            {listado()}
                        </tbody>
                    </table>
                </div>
            </div>

        </main>

    );
};

export default EmpleadoList;