import React from "react";
import { connect } from "react-redux";
import FilaEmpleado from "../FilaEmpleado";

const EmpleadoList = (props) => { 
    const listado = () => {
        return props.lista.map( emp => {
            return <FilaEmpleado emp={emp} key={emp.EMPLOYER_ID} />;
        });
    };

    return (
        <main style={{marginBottom:'-5px'}}>
            <div className="container">
            <div>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Contratacion</th>
                            <th>Sueldo</th>
                            <th>Comision</th>
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
const mapStateToProps = state => {
   return { lista : state.listaEmpleados}
};
export default connect( mapStateToProps )(EmpleadoList);