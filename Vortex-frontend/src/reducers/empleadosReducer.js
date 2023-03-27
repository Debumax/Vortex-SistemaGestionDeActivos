/* el teamReducer recibe un arreglo vacio de la lista de pokemon , es la parte del estado que se modifica,
 inicialmente el proyecto debe ingresar con 0 pokemon , por eso por defecto entra con un arreglo vacio
- y a su vez el action que debe de usar para modificar el estado (viene con el pokemon que agregaremos)
 */
import { GET_BY_ID, SET_EMPLEADOS, ADD_EMPLEADO, DELETE_EMPLEADO, EDIT_EMPLEADO } from "../actios/types";
//import { iniciando } from "./DatosIniciales"; // valores harcodeados
const iniciando = {
    empleados: 0,
    copyEmpleados: 0,
    empleado: '',
    pagina: 1,

};


const empleadosReducer = (oldListEmpleados = iniciando, action) => {
    switch (action.type) {

        case SET_EMPLEADOS:

            return {
                ...oldListEmpleados,
                empleados: action.payload.lista, pagina: action.payload.pagina,
                copyEmpleados: action.payload.lista, pagina: action.payload.pagina,
                empleado: 0,
                pagina: 0
            }

        case GET_BY_ID:
            return {
                ...oldListEmpleados,
                empleado: action.payload
            }



        case ADD_EMPLEADO:
            //creo una copia y agrego la info ,así no se modifica el estado recibido inicial
            return [...oldListEmpleados, action.payload];


        //busco el empleado y con el filter creo una copia sin ese elemento
        case DELETE_EMPLEADO:
            return oldListEmpleados.filter((empleado) => empleado.EMPLOYER_ID !== action.payload);


        case EDIT_EMPLEADO:

        return {
            ...oldListEmpleados,
            empleados: action.payload.lista, pagina: action.payload.pagina,
            copyEmpleados: action.payload.lista, pagina: action.payload.pagina,
            empleado: 0,
            pagina: 0
        }

        default:
            return oldListEmpleados;

    }
};

export default empleadosReducer;
