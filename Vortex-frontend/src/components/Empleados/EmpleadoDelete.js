import React from "react";
import { connect } from "react-redux";
import { useNavigate,useParams } from 'react-router-dom'; // hook 
import { deleteEmpleado } from "../../actios";

const EmpleadoDelete=(props)=>{
    const navegar=useNavigate();

    const parametro=useParams();//hook router
    const id=parametro.empId;
    
    const borra=()=>{
        props.deleteEmpleado(id);
        alert("se ELIMINO con exito");
        navegar('/');
    };
    const volver=()=>{
        navegar('/');
    };

    return (
        <>
            <article className="modal" style={{display:'contents'}} >  
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Está eliminando un empleado</h5> 
                        </div>
                        <div className="modal-body">
                            <p>El empleado dejará de existir por toda la eternidad</p>
                            <p>Está seguro ??? </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={borra} >Borrar</button>
                            <button type="button" className="btn btn-primary" onClick={volver}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </article>
        </>    
    );
};
export default connect(null,{deleteEmpleado} )( EmpleadoDelete);
