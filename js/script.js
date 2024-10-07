let inventario = '' /* true or false*/
let tipoMovimiento = 0 /* si inventario  es true = Compra, venta, intercambio si es false = Egreso, ingreso o transferencia */
// let cuentaBancaria = 0
//let total = 0 /* total del movimiento */
let user = ""


do{
    while (!inventario.trim()){
        inventario = prompt("Bienvenido \n ¿Qué tipo de movimieto desea hacer?. \n Escriba el número de movimiento: \n Bancario = 0 \n Inventario = 1 \n En caso desee terminar, escriba salir.")
        if(!inventario){
            alert("El campo no puede estar vacío. Inténtelo de nuevo.");
        }
    }
        if(inventario == 0){
            tipoMovimiento = parseInt(prompt("Escriba el número del tipo de movimiento de la lista: \n Egreso = 0\n Ingreso = 1 \n Transferencia = 2"))
                switch(tipoMovimiento){
                    case 0: 
                        alert(`Ha seleccionado hacer un movimiento Bancario tipo Egreso`);
                        break;
                    case 1: 
                        alert(`Ha seleccionado hacer un movimiento Bancario tipo Ingreso`);
                        break;
                    case 2: 
                        alert(`Ha seleccionado hacer un movimiento Bancario tipo Transferencia`);     
                        break;
                    default:
                        alert("Ingrese un tipo de movimiento válido");
                        continue;
                    }        
        } else if(inventario === 1){
                tipoMovimiento = parseInt(prompt("Escriba el número del tipo de movimiento de la lista: \n Compra = 0\n Venta = 1 \n Intercambio = 2"))
                    switch(tipoMovimiento){
                            case 0: 
                                alert(`Ha seleccionado hacer un movimiento de Inventario tipo Compra`);
                                break;
                            case 1: 
                                alert(`Ha seleccionado hacer un movimiento de Inventario tipo Venta`);
                                break;
                            case 2: 
                                alert(`Ha seleccionado hacer un movimiento de Inventario tipo Intercambio`); 
                                break;
                            default:
                                alert("Ingrese un tipo de movimiento válido");
                                continue;
                            }
        } else if (inventario !== "salir"){
        alert("Valor ingresado incorrecto. Ingrese 0 para movimiento bancario, 1 para movimiento de inventario o Salir para finalizar")
        continue;
    }
    inventario = ""
}while (inventario !== "salir");
