/*AQUI TENDREMOS LOS ACTION CREATOR , 
cada action creator es una funcion flecha*/

import { ADD_EMPLEADO, DELETE_EMPLEADO, EDIT_EMPLEADO } from "./types";
import { ADD_ASSET, DELETE_ASSET, EDIT_ASSET, VER_ASSET, VER_ASSET_BY_EMPLEADO } from "./types";

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

export const editarEmpleado = (payload_) => {
    return {
        type: EDIT_EMPLEADO,
        payload: payload_,
    };
}

////////////////////////////////////////////////////////
// ASSET 

export const addAsset= (payload_) => { // recibe el empleado
    return {
        //esto es un objeto action
        type: ADD_EMPLEADO,
        payload: payload_,//objeto que contiene info para cargar , es opcional
        // PAYLO seria un objeto con los datos del empleado
    };
};

export const deleteAsset = (id) => {
    return {
        type: DELETE_EMPLEADO,
        payload: id,
    };
}

export const editarAsset = (payload_) => {
    return {
        type: EDIT_EMPLEADO,
        payload: payload_,
    };
}

export const verAsset = (pagina,filtro) => {
    return {
        type: EDIT_EMPLEADO,
        payload: payload_,
    };
}
export const verAssetByEmpleado = (id_empleado) => {
    return {
        type: EDIT_EMPLEADO,
        payload: payload_,
    };
}