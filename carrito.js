const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminado");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disableb");
        contenedorCarritoProductos.classList.remove("disableb");
        contenedorCarritoComprado.classList.add("disableb");
        contenedorCarritoAcciones.classList.remove("disableb");
    
        contenedorCarritoProductos.innerHTML = "";
         
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carrito-producto-titulo">
                           <small>${producto.titulo}</small>
                           <h3>Sava Bici</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminado" id="${producto.id}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
            `
    
            contenedorCarritoProductos.append(div);
    
        })
    
    } else {
    
        contenedorCarritoVacio.classList.remove("disableb");
        contenedorCarritoProductos.classList.add("disableb");
        contenedorCarritoComprado.classList.add("disableb");
        contenedorCarritoAcciones.classList.add("disableb");
    
    };
    
    actualizarBotonesEliminar();
    actualizarTotal();
};

cargarProductosCarrito()



function actualizarBotonesEliminar () {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminado");

    botonesEliminar.forEach( boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
};


function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoEliminado = productosEnCarrito.find(producto => producto.id === idBoton );
    const index  = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
};

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
   total.innerText = `${totalCalculado}`;
};

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disableb");
    contenedorCarritoProductos.classList.add("disableb");
    contenedorCarritoComprado.classList.remove("disableb");
    contenedorCarritoAcciones.classList.add("disableb");
};