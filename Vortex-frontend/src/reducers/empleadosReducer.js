/* el teamReducer recibe un arreglo vacio de la lista de pokemon , es la parte del estado que se modifica,
 inicialmente el proyecto debe ingresar con 0 pokemon , por eso por defecto entra con un arreglo vacio
- y a su vez el action que debe de usar para modificar el estado (viene con el pokemon que agregaremos)
 */
import { ADD_EMPLEADO , DELETE_EMPLEADO, EDIT_EMPLEADO } from "../actios/types";
import { iniciando } from "./DatosIniciales";


const empleadosReducer = (oldListEmpleados = iniciando, action ) => {
    switch (action.type) {
        case ADD_EMPLEADO:
            //creo una copia y agrego la info ,así no se modifica el estado recibido inicial
            return [...oldListEmpleados , action.payload];
           

            //busco el empleado y con el filter creo una copia sin ese elemento
        case DELETE_EMPLEADO:
            return oldListEmpleados.filter( (empleado) => empleado.EMPLOYER_ID !== action.payload);
            

        case EDIT_EMPLEADO:
            //console.log(action.payload);
            const {FIRST_NAME,LAST_NAME,PHONE_NUMBER,HIRE_DATE,SALARY,COMMISSION_PCT}= action.payload;
            
            let listaModificada = oldListEmpleados.map( (emp)=>{
                if (emp.EMPLOYER_ID === action.payload.EMPLOYER_ID) {

                    emp.FIRST_NAME=FIRST_NAME;
                    emp.LAST_NAME=LAST_NAME;
                    emp.PHONE_NUMBER=PHONE_NUMBER;
                    emp.HIRE_DATE=HIRE_DATE;
                    emp.SALARY=SALARY;
                    emp.COMMISSION_PCT=COMMISSION_PCT;                    
                }
                return emp;
            });
            return listaModificada;

        default:
            return oldListEmpleados;  
                  
    }
};

export default empleadosReducer;
