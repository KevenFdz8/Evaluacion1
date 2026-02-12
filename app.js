// URL de la API de YuGiOh
const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0";

// Funcion asincrona para obtener las cartas
async function obtenerCartas() {
    try {
        // Hacemos la peticion a la API usando fetch
        const respuesta = await fetch(API_URL);

        // Convertimos la respuesta a formato JSON
        const datos = await respuesta.json();

        // Mostramos el objeto JSON en consola (para la captura F12)
        console.log(datos);

        // Llamamos a la funcion que renderiza las cartas
        mostrarCartas(datos.data);

    } catch (error) {
        // En caso de error lo mostramos en consola
        console.error("Error al obtener las cartas:", error);
    }
}

// Funcion para crear las tarjetas dinamicamente
function mostrarCartas(cartas) {

    // Seleccionamos el contenedor principal
    const contenedor = document.getElementById("card-container");

    // Recorremos el arreglo de cartas
    cartas.forEach(carta => {

        // Creamos un div para cada tarjeta
        const card = document.createElement("div");
        card.classList.add("card");

        // Insertamos contenido dinamico usando template literals
        card.innerHTML = `
    <img src="${carta.card_images[0].image_url}" alt="${carta.name}">
    <h2>${carta.name}</h2>
    <p><strong>Tipo:</strong> ${carta.type}</p>
    <p><strong>Atributo:</strong> ${carta.attribute || "N/A"}</p>
    <p><strong>Nivel:</strong> ${carta.level || "N/A"}</p>
    <p><strong>Raza:</strong> ${carta.race || "N/A"}</p>
    <p><strong>ATK:</strong> ${carta.atk || "N/A"}</p>
    <p><strong>DEF:</strong> ${carta.def || "N/A"}</p>
    <p><strong>Arquetipo:</strong> ${carta.archetype || "No definido"}</p>
    <p class="descripcion">${carta.desc}</p>
`;

        // Agregamos la tarjeta al contenedor
        contenedor.appendChild(card);
    });
}

// Ejecutamos la funcion al cargar la pagina
obtenerCartas();




