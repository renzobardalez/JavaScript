let inventario = 0 /* true or false*/
let tipoMovimiento = 0 /* si inventario  es true = Compra, venta, intercambio si es false = Egreso, ingreso o transferencia */
// let cuentaBancaria = 0
//let total = 0 /* total del movimiento */
let user = ""


do{
    inventario = prompt("¿Qué tipo de movimieto hará?.\n Bancario = 0 \n Inventario = 1 \n En caso desee terminar, escriba salir.")
    if(inventario !== 0 || inventario !== 1){
        if(inventario == 0){
            tipoMovimiento = parseInt(prompt("Escriba el número del tipo de movimiento de la lista: \n Egreso = 0\n Ingreso = 1 \n Transferencia =2"))
            if(tipoMovimiento === 0 || tipoMovimiento === 1 || tipoMovimiento === 2 ){
                alert(`Ha seleccionado hacer un movimiento ${inventario} tipo ${tipoMovimiento}`)
            } else{
                alert("Ingrese un tipo de movimiento válido")
            }   
        }
            if(inventario == 1){
                tipoMovimiento = parseInt(prompt("Escriba el número del tipo de movimiento de la lista: \n Compra = 0\n Venta = 1 \n Intercambio =2"))
                if(tipoMovimiento === 0 || tipoMovimiento === 1 || tipoMovimiento === 2 ){
                    alert(`Ha seleccionado hacer un movimiento ${inventario} tipo ${tipoMovimiento}`)
                } else{
                    alert("Ingrese un tipo de movimiento válido")
                }
            }
    } else{
    alert("Valor ingresado incorrecto. Ingrese 0 para movimiento bancario, 1 para movimiento de inventario o Salir para finalizar")
    }
}while (inventario !== "salir")
