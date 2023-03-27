import React from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const FilaEmpleado=(props) =>{
    const fecha = moment.utc(props.emp.join_date).format('YYYY-MM-DD');
    return (
        <tr>    
            <td>{props.emp.first_name}</td>
            <td>{props.emp.last_name}</td>
            <td>{props.emp.cuit}</td>
            <td>{props.emp.rol}</td>
            <td>{fecha}</td>
            <td>{props.emp.team_id}</td>
            <td>
                <Link to={`/empleado/show/${props.emp.id_employee}`} id ={props.emp.id_employee} className="btn btn-outline-info " style={{margin:'2%'}} >VER</Link>
                <Link to={`/empleado/delete/${props.emp.id_employee}`} id = {props.emp.id_employee} className="btn btn-outline-danger " style={{margin:'2%'}} >DELETE</Link>
            </td>
        </tr>
    );
};
export default FilaEmpleado;