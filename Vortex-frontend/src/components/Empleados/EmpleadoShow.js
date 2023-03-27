import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'; // hook 
import { getEmpleadoByID, setEmpleadoByID, setEmpleados } from "../../actios";
import { getEmpleados } from "../../api-backend/api";
import FormularioVerEditar from '../FormularioVerEditar';

const EmpleadoShow = () => {

    return (
        <div>
            <FormularioVerEditar />
        </div>
    );
};


export default EmpleadoShow;