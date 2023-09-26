// function verDetalles(productoId) {
//   // Redirige a la página de detalles con el ID del producto como parámetro en la URL
//   function guardarProductosEnLocalStorage() {
//     fetch("productos.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Guardar los productos en el localStorage
//         localStorage.setItem("productos", JSON.stringify(data));
//       })
//       .catch((error) => {
//         console.error(
//           "Error al cargar los productos desde el archivo JSON",
//           error
//         );
//       });
//   }

//   guardarProductosEnLocalStorage();
//   document.location.href = `detalle.html?id=${productoId}`;
//   console.log(productoId);
// }

// const hola = document.getElementsByClassName("botonProducto");
// hola.addEventListener("click", () => {
//   verDetalles();
// });
// console.log(hola);
// const boton = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//   });
// Crear una variable que contenga todos los elementos con la clase "botonProducto"
// const botonesProducto = document.querySelectorAll(".botonProducto");

// function verDetalles(productoId) {
//   // Redirige a la página de detalles con el ID del producto como parámetro en la URL
//   function guardarProductosEnLocalStorage() {
//     fetch("productos.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Guardar los productos en el localStorage
//         localStorage.setItem("productos", JSON.stringify(data));
//       })
//       .catch((error) => {
//         console.error(
//           "Error al cargar los productos desde el archivo JSON",
//           error
//         );
//       });
//   }

//   guardarProductosEnLocalStorage();
//   document.location.href = `detalle.html?id=${productoId}`;
//   console.log(productoId);
// }

// // Recorrer todos los botones y agregarles un evento de clic
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

// Definir la función verDetalles
