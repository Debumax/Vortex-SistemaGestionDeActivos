import axios from "axios";

import { GET_BY_ID,SET_EMPLEADOS, ADD_EMPLEADO, DELETE_EMPLEADO, EDIT_EMPLEADO } from "./types";
import { SET_ASSETS, ADD_ASSET, DELETE_ASSET, EDIT_ASSET, VER_ASSET, VER_ASSET_BY_EMPLEADO } from "./types";

export const addEmpleado = (payload_) => { // recibe el empleado
    return {
        //esto es un objeto action
        type: ADD_EMPLEADO,
        payload: payload_,//objeto que contiene info para cargar , es opcional
        // PAYLO seria un objeto con los datos del empleado
    };
};

export const deleteEmpleado = (id) => {
    return {
        type: DELETE_EMPLEADO,
        payload: id,
    };
}

export const patchEmpleado=(id,empleado)=>async (dispatch)=>{
    const empleadoUpdate=await axios.patch(`http://localhost:5000/api/Empoyee/${id}`,empleado)
    .then(res=>res.data)
    .catch(error => console.log("paso algo en la conexion con la api, error: ",error))
    const empUpd=empleadoUpdate.data[0];
    console.log("en ACTION",empUpd);
    dispatch(setEmpleadoById(empUpd)) 


} 

export const editarEmpleado = (id,empleado) => {
    return {
        type: EDIT_EMPLEADO,
        payload: {id,empleado}
    };
}

export const setEmpleados = (lista,pagina) => {//viene con los empleados y la cantidad de paginas 
    return {
        type: SET_EMPLEADOS,
        payload: {lista,pagina},
    };
}

export const getEmpleadoByID = (id=0) =>async (dispatch) =>  {
    const empleado =  await axios.get(`http://localhost:5000/api/Empoyee/${id}`)
    .then(res =>  res.data)    
    .catch(error => console.log("paso algo en la conexion con la api, error: ",error))
   const data = empleado.data[0];
    dispatch(setEmpleadoById(data))
}

export const setEmpleadoById = (empleado)=>{
    return {
        type:GET_BY_ID,
        payload: empleado,
    }
}



////////////////////////////////////////////////////////
// ASSET 

export const addAsset = (payload_) => { // recibe el empleado
    return {
        //esto es un objeto action
        type: ADD_ASSET,
        payload: payload_,//objeto que contiene info para cargar , es opcional
        // PAYLO seria un objeto con los datos del empleado
    };
};

export const deleteAsset = (id) => {
    return {
        type: DELETE_ASSET,
        payload: id,
    };
}

export const editarAsset = (payload_) => {
    return {
        type: EDIT_ASSET,
        payload: payload_,
    };
}

export const verAsset = (pagina, filtro) => {// trae todos los asset 
    return {
        type: VER_ASSET,
        payload: { pagina, filtro },
    };
}
export const verAssetByEmpleado = (id_empleado) => {
    return {
        type: VER_ASSET_BY_EMPLEADO,
        payload: id_empleado,
    };
}

export const setAsset = (assetApi) => {//viene con los empleados y la cantidad de paginas 
    return {
        type: SET_ASSETS,
        payload: assetApi,
    }
}
