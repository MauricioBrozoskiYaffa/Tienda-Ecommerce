const productos = [
    /* Bicicletas */
    {
        id: "MTB-01",
        titulo: "MTB 01",
        imagen: "./img/bicicletas/187955065_5786546208052422_6761017138408178203_n.jpg",
        categoria: {
            nombre: "Bicicletas",
            id: "Bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-02",
        titulo: "MTB 02",
        imagen: "./img/bicicletas/2022011913261733259.jpeg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-03",
        titulo: "MTB 03",
        imagen: "./img/bicicletas/frame-000000-6443e5503f686.jpg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-04",
        titulo: "MTB 04",
        imagen: "./img/bicicletas/OPT_RAG0688.jpg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-05",
        titulo: "MTB 05",
        imagen: "./img/bicicletas/pxl_20220207_1518186321-922c867a6cb1f90cea16442512136941-1024-1024.jpg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-06",
        titulo: "MTB 06",
        imagen: "./img/bicicletas/SAVA-DECK_01-1-1024x768.jpg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-07",
        titulo: "MTB 07",
        imagen: "./img/bicicletas/Venzo-elemento_aviso-02.jpg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    {
        id: "MTB-08",
        titulo: "MTB 08",
        imagen: "./img/bicicletas/whatsapp-image-2022-08-09-at-10-08-09-am-11-d188f7ddcf7aa6fb3a16600556557828-1024-1024.jpeg",
        categoria: {
            nombre: "Bicicletas",
            id: "bicicletas"
        },
        precio: 600.000
    },
    /* Cascos */
    {
        id: "Casco-01",
        titulo: "Casco 01",
        imagen: "./img/cascos/0061972_HC58BK_01.jpg_600.jpeg",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-02",
        titulo: "Casco 02",
        imagen: "./img/cascos/0063638_HC58CR_01.jpg_600.jpeg",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-03",
        titulo: "Casco 03",
        imagen: "./img/cascos/casco-bicicleta-lazer-strada-kineticore-light-azul-sunset.jpg",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-04",
        titulo: "Casco 04",
        imagen: "./img/cascos/casco-bicicleta-lazer-strada-kineticore-matte-dark-grey-flas.jpg",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-05",
        titulo: "Casco 05",
        imagen: "./img/cascos/gsc_116389107_1475031_1.jfif",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-06",
        titulo: "Casco 06",
        imagen: "./img/cascos/gsc_117247472_1718910_1.jfif",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-07",
        titulo: "Casco 07",
        imagen: "./img/cascos/gsc_123043381_3529867_1.jfif",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    {
        id: "Casco-08",
        titulo: "Casco 08",
        imagen: "./img/cascos/img_color16694.jpg",
        categoria: {
            nombre: "Cascos",
            id: "cascos"
        },
        precio: 600.000
    },
    /* Remeras */
    {
        id: "Remera-01",
        titulo: "Remera 01",
        imagen: "./img/camisetas/12f4fea82c68bab45cf387ba2b5ddbd7.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-02",
        titulo: "Remera 02",
        imagen: "./img/camisetas/camisa_ciclismo_bike_show_linha_2020_2021_unissex_1987_1_20211221183536.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-03",
        titulo: "Remera 03",
        imagen: "./img/camisetas/fb957869d1004c896ef38a8f570f477a.jfif",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-04",
        titulo: "Remera 04",
        imagen: "./img/camisetas/img_color6447.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-05",
        titulo: "Remera 05",
        imagen: "./img/camisetas/istockphoto-1191401055-612x612.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-06",
        titulo: "Remera 06",
        imagen: "./img/camisetas/jersey-aex-camino-de-santiago.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-07",
        titulo: "Remera 07",
        imagen: "./img/camisetas/Remeras-Ciclismo-Hombre-Jersey-Giant-Rival-Ss-Original-Bora.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    {
        id: "Remera-08",
        titulo: "Remera 08",
        imagen: "./img/camisetas/uniforme-de-ciclismo-personalizado.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 600.000
    },
    /* Calzas */
    {
        id: "Calza-01",
        titulo: "Calza 01",
        imagen: "./img/calzas/112651737_1.jfif",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-02",
        titulo: "Calza 02",
        imagen: "./img/calzas/2a4beecf-3be6-4391-9b41-a7ba6403e4c9-35bc148c7185dbbe7716935197150400-1024-1024.jpg",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-03",
        titulo: "Calza 03",
        imagen: "./img/calzas/bc1cc9c1-76c7-41af-95a0-c466b12dd969-94998bac257861db9316935197077818-1024-1024.jpg",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-04",
        titulo: "Calza 04",
        imagen: "./img/calzas/calza_funkier_monza_1_imagen2.jpg",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-05",
        titulo: "Calza 05",
        imagen: "./img/calzas/d2286070-3397-41d5-8990-221341c1e561-b61f15b7c5a6bdfdeb16935336688261-1024-1024.jpg",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-06",
        titulo: "Calza 06",
        imagen: "./img/calzas/OKFOA403129-1.jfif",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-07",
        titulo: "Calza 07",
        imagen: "./img/calzas/VR21300100704-1.jfif",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    {
        id: "Calza-08",
        titulo: "Calza 08",
        imagen: "./img/calzas/5878924e-496a-45ee-bc25-d0c622ded140-7d9423337432b8f93b16935337193386-1024-1024.png",
        categoria: {
            nombre: "Calzas",
            id: "calzas"
        },
        precio: 600.000
    },
    /* Caramañolas */
    {
        id: "Caramañola-01",
        titulo: "Caramañola 01",
        imagen: "./img/caramañolas/01604349_FLY-550ML-BAHRAIN-McLAREN-1-1024x809.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-02",
        titulo: "Caramañola 02",
        imagen: "./img/caramañolas/4fd1f11b6febefbf7034e9cf4a774e00-product.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-03",
        titulo: "Caramañola 03",
        imagen: "./img/caramañolas/52b57e6dc25411a37c08409b3ed08fa8-product.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-04",
        titulo: "Caramañola 04",
        imagen: "./img/caramañolas/9448a11b57e77831df94f93012802889-product.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-05",
        titulo: "Caramañola 05",
        imagen: "./img/caramañolas/caramanola-ciclismo-drb-750-cc.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-06",
        titulo: "Caramañola 06",
        imagen: "./img/caramañolas/images.jfif",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-07",
        titulo: "Caramañola 07",
        imagen: "./img/caramañolas/muc-off-bottle-negro-tras1-d98840d14a96a4e5de16551453517430-1024-1024.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    {
        id: "Caramañola-08",
        titulo: "Caramañola 08",
        imagen: "./img/caramañolas/Product-botcg-flowbottle-y12-zoom1_dfcd1f64-041d-444f-ba5d-d8f989666195_1800x1800.jpg",
        categoria: {
            nombre: "Caramanolas",
            id: "caramanolas"
        },
        precio: 600.000
    },
    /* Gauntes */
    {
        id: "Guantes-01",
        titulo: "Guantes 01",
        imagen: "./img/guantes/0e050440-b600-445b-8f77-22ffe7eb0a6a-c0aa611ca286e66f6416935246164287-1024-1024.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-02",
        titulo: "Guantes 02",
        imagen: "./img/guantes/c9657762-288b-4839-ae37-205735a99a0a.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-03",
        titulo: "Guantes 03",
        imagen: "./img/guantes/ciclismo-silicona-par1-6b434913d88e93fcd815840403315209-1024-1024.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-04",
        titulo: "Guantes 04",
        imagen: "./img/guantes/Guantes-Ciclismo-Dedos-Largos-Fox-Ranger-Gel-Originales-Bora.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-05",
        titulo: "Guantes 05",
        imagen: "./img/guantes/guantes-ciclismo-mujer-dedos-largos-fox-ranger-originales.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-06",
        titulo: "Guantes 06",
        imagen: "./img/guantes/guantes_ciclismo_largos_giro_rivet_ii_2_imagen1.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-07",
        titulo: "Guantes 07",
        imagen: "./img/guantes/Mti_09814_02.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    },
    {
        id: "Guantes-08",
        titulo: "Guantes 08",
        imagen: "./img/guantes/puntobike-guante-corto-altitude.jpg",
        categoria: {
            nombre: "Guantes",
            id: "guantes"
        },
        precio: 600.000
    }

];



const contenedorProductos = document.querySelector("#container-productos");
const botonesCategorias = document.querySelectorAll(".button-categoria");
const tituloPrincipal = document.querySelector("#titutlo-principal");
const numerito = document.querySelector("#numerito");
let botonesAgregar = document.querySelectorAll(".producto-agregar");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">$${producto.precio}</p>
          <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
         `;

      contenedorProductos.append(div);
      
    });
    actualizarBotonesAgregar();
    
};

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        

        if (e.currentTarget.id != "todos") {
            const productosCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            

                

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerHTML = "Todos los Productos";
            cargarProductos(productos);
        };
          
    });
});


function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach( boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
};

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS) {
     productosEnCarrito = JSON.parse(productosEnCarritoLS);
     actualizarNumerito();
} else {
   productosEnCarrito = [];
}




function agregarAlCarrito(e) {
   const idBoton = e.currentTarget.id;
   const productosAgregado = productos.find(producto => producto.id === idBoton);

   if (productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
   } else {
       productosAgregado.cantidad = 1;
       productosEnCarrito.push(productosAgregado);
   }
   actualizarNumerito();
   
   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}






