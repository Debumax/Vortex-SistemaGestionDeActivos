import React from "react";
import { Link } from "react-router-dom";

const FilaEmpleado=(props) =>{
    return (
        <tr>    
            <td>{props.emp.FIRST_NAME}</td>
            <td>{props.emp.LAST_NAME}</td>
            <td>{props.emp.PHONE_NUMBER}</td>
            <td>{props.emp.HIRE_DATE}</td>
            <td>{props.emp.SALARY}</td>
            <td>{props.emp.COMMISSION_PCT}</td>
            <td>
                <Link to={`/empleado/show/${props.emp.EMPLOYER_ID}`} id ={props.emp.EMPLOYER_ID} className="btn btn-outline-info " style={{margin:'2%'}} >VER</Link>
                <Link to={`/empleado/delete/${props.emp.EMPLOYER_ID}`} id = {props.emp.EMPLOYER_ID} className="btn btn-outline-danger " style={{margin:'2%'}} >DELETE</Link>
            </td>
        </tr>
    );
};
export default FilaEmpleado;