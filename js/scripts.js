function total(){
    var cantidad = document.getElementById("cantidad").value;
    var selectCategoria = document.getElementById("categoria").value;
    
    if(cantidad<1){
        alert("Cantidad inválida");
        borrar();
    } else {
        var aPagar= (200-(200*(selectCategoria/100)))*cantidad;
        document.getElementById("aPagar").value = "Total a Pagar: $" + aPagar;
    }
}

function borrar(){
    document.getElementById("cantidad").value = 0;
    document.getElementById("aPagar").value = "Total a Pagar: $";
}