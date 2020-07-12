// fetch api, reemplaza a ajax

function descargarUsuarios(cantidad) {
    const api = `https://randomuser.me/api/?results=${cantidad}`;

    // llamado a fetch
    fetch(api)
        .then ( response => {
            return response.json();
        })
        .then ( datos => {
            imprimitHTML ( datos.results );
            // console.log( datos.results );
        });
    
}

descargarUsuarios(50);


function imprimitHTML ( datos ) {

    datos.forEach(usuario => {
        const li = document.createElement('li');

        const { name: {first}, name: {last}, picture: {medium}, nat } = usuario


        li.innerHTML = `
            nombre: ${first} ${last},
            pais: ${nat}
            imagen: <img src="${medium}">
        `;

        document.querySelector('#app').appendChild(li);
        
    });

}