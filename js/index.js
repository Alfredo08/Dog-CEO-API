
function buscadorDeImagenesDePerritos( event ){
    event.preventDefault();
    let cantidad = document.querySelector( '#cantidad' ).value;
    let url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

    let config = {
        method : "GET"
    };

    fetch( url, config )
        .then( function( respuesta ){
            console.log( respuesta );
            if( respuesta.ok ){
                return respuesta.json();
            }
            else{
                throw Error( "El sitio no fue encontrado 404" + respuesta.statusText );
            }
        })
        .then( function( respuestaJSON ){
            console.log( respuestaJSON );
            let resultados = document.querySelector( '.resultados' );
            resultados.innerHTML = "";

            for( let i = 0; i < respuestaJSON.message.length; i ++ ){
                resultados.innerHTML += `<div>
                                            <img src="${respuestaJSON.message[i]}" alt="Imagen de un perrito" />
                                         </div>`;
            }
        })
        .catch( function( error ){
            let resultados = document.querySelector( '.resultados' );
            resultados.innerHTML = error;
        });

    console.log( "Esto se imprime primero!!!" );

}


async function buscadorDeImagenesDePerritosAsync( event ){
    event.preventDefault();
    let cantidad = document.querySelector( '#cantidad' ).value;
    let url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

    let config = {
        method : "GET"
    };
    try{
        let respuesta = await fetch( url, config );
        if( respuesta.ok ){
            let respuestaJSON = await respuesta.json();
            let resultados = document.querySelector( '.resultados' );
            resultados.innerHTML = "";

            for( let i = 0; i < respuestaJSON.message.length; i ++ ){
                resultados.innerHTML += `<div>
                                            <img src="${respuestaJSON.message[i]}" alt="Imagen de un perrito" />
                                            </div>`;
            }
        }
        else{
            throw Error( "El sitio no fue encontrado 404" + respuesta.statusText );
        }
    }
    catch( error ){
        let resultados = document.querySelector( '.resultados' );
            resultados.innerHTML = error;
    }

}

let dogForm = document.querySelector( '.dogForm' );
dogForm.addEventListener( 'submit', buscadorDeImagenesDePerritosAsync );


