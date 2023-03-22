/*En el combine reducer es donde se crean los estados globales */
import { combineReducers } from 'redux';
import empleadosReducer from './empleadosReducer';


export default combineReducers ({
    //aqui se escribe el stado global
    listaEmpleados: empleadosReducer ,// lo que devuelva el reducer de empleadosReducer
    // key listaEmpleados
   
});