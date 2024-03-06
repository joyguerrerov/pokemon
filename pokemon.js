const url = 'https://pokeapi.co/api/v2/pokemon/1';
const url1 = 'https://pokeapi.co/api/v2/pokemon/2';
const url2 = 'https://pokeapi.co/api/v2/pokemon/3';

async function cargarDatos(endPoint) {
    const response = await fetch(endPoint, { method: 'GET' })
    //console.log(response);
    const data = await response.json()
    //console.log(data);
    const array = data.results
    pintarContainers(array, sectionContainers)
}

/*
<div class="container">
    <h1>Pokedex</h1>
    <ol id="pokedex"></ol>
 </div>
<article>
    <figure>
        <img src="" alt=""> solo esta tiene atributo 
    </figure>
    <h3>Nombre personaje</h3>
</article>
*/

const sectionContainers = document.querySelector('.containers');
// const pokemon = results.map(('result') => ({
//     name: result.name,
//     image: result.sprites['front_default'],
//     type: result.types.map((type) => type.type.name).join(', '),
//     id: result.id
// }))
function pintarContainers( lista, lugar){
    for (let container of lista) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = 'Pokedex'
        const ol = document.createElement('ol');
        ol.id = "pokedex"

        const article = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = data.sprites['front_default']; 
        img.alt = data.name;
        const h3 = document.createElement('h3');
            h3.textContent = data.name
        
        div.append(h1, ol);
        ol.appendChild(`${id}`);
        figure.appendChild(img);
        article.append(figure, h3);

         lugar.appendChild(div,article);
    }
}

cargarDatos(url)
cargarDatos(url1)
cargarDatos(url2)