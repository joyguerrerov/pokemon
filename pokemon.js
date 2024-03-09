const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function cargarDatos(endPoint) {
    const response = await fetch(endPoint, { method: 'GET' })
    
    //esto me da un array que esta en data
    const data = await response.json()

    // guardo la lista de pokemons con su URL para consultar su datos
    let pokemos = data.results;

    // creo una variable para guardar los pokemos
    let todosPokemon = []

    // recorreo cada pokemon para consultar su API en concreto
    for (let p of pokemos)
    {
        // connsulto su api
        let res = await fetch(p.url, { method: 'GET' })
        // guardo la respuesta en la variable
        let infoPokemon = await res.json();

        // añado a la lista de pokemos todos los datos de ese pokemon
        todosPokemon.push(infoPokemon);
    }

    // console.log(todosPokemon);

    // dibujo en web
    pintarCharacters(todosPokemon, sectionCharacters)
    // if (data.results) {
    //     const array = data.results
    //     pintarCharacters(array, sectionCharacters)
    // } else {
    //     pintarUnCharacter(data, sectionCharacters)
    // }
  
}

cargarDatos(url)

/*
<article>
    <figure>
        <img src="" alt="">  
    </figure>
    <h3>Nombre personaje</h3>
    <h4>Tipo:</h4>
    <p>#</p>

</article>
*/

const sectionCharacters = document.querySelector('.characters');
function pintarCharacters(lista, lugar) {
    for (let character of lista) {
        pintarUnCharacter(character, lugar)
    }
}

function pintarUnCharacter(character, lugar) {
        const article = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        // console.log("linea 1");    
        // console.log(character.sprites.front_default);
        img.src = `${character.sprites.other['official-artwork'].front_default}`;
        img.alt = character.name;
        const h3 = document.createElement('h3');
        h3.textContent = character.name
        // const h4 = document.createElement('h4');
        // h4.textContent = character.
        // const p = document.createElement('p');
        // p.textContent = character.
        
        figure.appendChild(img);
        article.append(figure, h3);

         lugar.appendChild(article);
}

