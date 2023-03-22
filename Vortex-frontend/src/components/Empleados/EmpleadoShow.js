import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom'; // hook 
import FormularioVerEditar from '../FormularioVerEditar';

const EmpleadoShow=(props)=>{
    const [ver_empleado,setVer_empleado]=useState('');

    const parametro=useParams();//hook router
    const id=parametro.empId;

    return (
        <div>
            <FormularioVerEditar id={parametro.empId}/>
        </div>
    );
};

const mapStateToProps = state => {
    return { lista : state.listaEmpleados}
 };
export default connect(mapStateToProps)(EmpleadoShow);