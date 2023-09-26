function verDetalles(productoId) {
  // Redirige a la página de detalles con el ID del producto como parámetro en la URL
  function guardarProductosEnLocalStorage() {
    fetch("productos.json")
      .then((response) => response.json())
      .then((data) => {
        // Guardar los productos en el localStorage
        localStorage.setItem("productos", JSON.stringify(data));
      })
      .catch((error) => {
        console.error(
          "Error al cargar los productos desde el archivo JSON",
          error
        );
      });
  }
  guardarProductosEnLocalStorage();
  document.location.href = `detalle.html?id=${productoId}`;
}

const hola = document
  .getElementById("botonProducto")
  .addEventListener("click", verDetalles);

// const botonesProducto = document.querySelectorAll(".botonProducto");
// botonesProducto.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     // Obtener el ID del producto desde el atributo data-id del botón
//     let productoId = boton.dataset.id;
//     // Llamar a la función verDetalles con el ID del producto
//     verDetalles(productoId);
//     // console.log(productoId);
//     // verDetalles();
//   });
// });
