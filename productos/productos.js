function calcularPrecio() {
    // Obtener el valor seleccionado del select
    var licencia = parseFloat(document.getElementById("licencia").value);
  
    // Precios fijos de instalación y despliegue
    var precioInstalacion = 50;
    var precioDespliegue = 100;
  
    // Calcular el precio total
    var precioTotal = licencia + precioInstalacion + precioDespliegue;
  
    // Mostrar el precio total en la página
    document.getElementById("precio-total").innerHTML = "$" + precioTotal.toFixed(2);
  }
  