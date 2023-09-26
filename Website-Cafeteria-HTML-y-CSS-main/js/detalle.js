// Función para obtener el ID del producto desde la URL
// function obtenerIdProductoDesdeURL() {
//   const queryString = document.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   console.log(queryString, urlParams);
//   return urlParams.get("id");
// }

// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   console.log(productoId);
//   const producto = productos.find((item) => item.id === parseInt(productoId));
//   console.log(productoId);
//   if (producto) {
//     console.log(producto);
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//     console.log(producto);
//   } else {
//     console.error("Producto no encontrado");
//   }
// }

// Llamar a la función para cargar los detalles del producto cuando se carga la página
// cargarDetallesDelProducto();
// function obtenerIdProductoDesdeURL() {
//   const queryString = document.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   console.log(queryString, urlParams);
//   return urlParams.get("id");
// }

// // Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === productoId);

//   if (producto) {
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   } else {
//     console.error("Producto no encontrado");
//   }
// }

// // Llamar a la función para cargar los detalles del producto cuando se carga la página
// window.onload = cargarDetallesDelProducto;
// Función para cargar los detalles del producto desde el localStorage
// function cargarDetallesDelProducto() {
//   // Obtener el ID del producto de la URL
//   const productoId = obtenerIdProductoDesdeURL();

//   // Obtener los productos del localStorage
//   const productos = JSON.parse(localStorage.getItem("productos"));

//   // Buscar el producto por ID
//   const producto = productos.find((item) => item.id === parseInt(productoId));

//   if (!producto) {
//     // El producto no existe en el localStorage
//     console.error("Producto no encontrado");
//   } else {
//     // Mostrar los detalles del producto en la página
//     document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
//     document.getElementById("nombreProducto").textContent = producto.nombre;
//     document.getElementById(
//       "descripcionProducto"
//     ).textContent = `Descripción: ${producto.descripcion}`;
//     document.getElementById(
//       "precioProducto"
//     ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
//   }
// }

// Llamar a la función para cargar los detalles del producto cuando se carga la página
// window.onload = cargarDetallesDelProducto;
// Función para obtener el ID del producto de la URL
// function obtenerIdProductoDesdeURL() {
//   // Obtener el parámetro `id` de la URL
//   const queryString = document.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id");

//   // Si el parámetro `id` no existe, devolver un valor undefined
//   if (!productoId) {
//     return undefined;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }
// function obtenerIdProductoDesdeURL() {
//   // Obtener el parámetro `id` de la URL
//   const queryString = document.location.href;
//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id", "1");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }

// function obtenerIdProductoDesdeURL() {
//   // Obtener la cadena de consulta de la URL
//   const queryString = window.location.search;
//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id", "1");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }
// function obtenerIdProductoDesdeURL() {
//   // Obtener la cadena de consulta de la URL
//   const queryString = window.location.search;
//   if (!queryString) {
//     // La URL no tiene cadena de consulta
//     return undefined;
//   }

//   console.log(queryString);
//   const urlParams = new URLSearchParams(queryString);
//   const productoId = urlParams.get("id", "1");

//   // Si el parámetro `id` no existe, devolver el valor predeterminado
//   if (!productoId) {
//     return 1;
//   }

//   // Devolver el parámetro `id`
//   return productoId;
// }
function obtenerIdProductoDesdeURL() {
  // Obtener la cadena de consulta de la URL
  const queryString = window.location.search || "";
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const productoId = urlParams.get("id");

  // Si el parámetro `id` no existe, devolver el valor predeterminado
  if (!productoId) {
    return 1;
  }

  // Devolver el parámetro `id`
  return productoId;
}

console.log(obtenerIdProductoDesdeURL());

// Función para cargar los detalles del producto desde el localStorage
function cargarDetallesDelProducto() {
  // Obtener el ID del producto de la URL
  const productoId = obtenerIdProductoDesdeURL();
  console.log(productoId);
  // Si el parámetro `id` es undefined, no hacer nada
  if (!productoId) {
    return;
  }

  // Obtener los productos del localStorage
  const productos = JSON.parse(localStorage.getItem("productos"));
  console.log(productos);
  // Buscar el producto por ID
  const producto = productos.find((item) => item.id === parseInt(productoId));
  console.log(producto);
  if (producto) {
    // Mostrar los detalles del producto en la página
    document.getElementById("imagenProducto").src = producto.imagen || ""; // Asegúrate de que el producto tenga una propiedad "imagen"
    document.getElementById("nombreProducto").textContent = producto.nombre;
    document.getElementById(
      "descripcionProducto"
    ).textContent = `Descripción: ${producto.descripcion}`;
    document.getElementById(
      "precioProducto"
    ).textContent = `Precio: $${producto.precio.toFixed(2)}`;
  } else {
    // El producto no existe en el localStorage
    console.error("Producto no encontrado");
  }
}

// Llamar a la función para cargar los detalles del producto cuando se carga la página
cargarDetallesDelProducto();

// Función para volver a la página principal
function volverAPaginaPrincipal() {
  // Redirige al usuario a la página principal (index.html)
  window.location.href = "index.html";
}

const boton = document.querySelector("button").addEventListener("click", () => {
  volverAPaginaPrincipal();
});
// Agrega esto al final de tu archivo JavaScript (script.js)
document.addEventListener("DOMContentLoaded", () => {
  const starRatingContainers = document.querySelectorAll(".star-rating");

  starRatingContainers.forEach((container) => {
    const stars = container.querySelectorAll(".fa-star");
    let userRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        userRating = index + 1;
        updateStarRating(container, userRating);
      });
    });

    // Función para actualizar la calificación y aplicar estilos
    function updateStarRating(container, rating) {
      const stars = container.querySelectorAll(".fa-star");
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("checked");
        } else {
          star.classList.remove("checked");
        }
      });
    }
  });
});
