let getBtn = document.querySelector('#getPokemon');
getBtn.addEventListener('click', fetchPokemon);


async function fetchPokemon(){
      await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(response => response.json())
      .then(function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                  fetchPokemonData(pokemon);
            })
      })
}

async function fetchPokemonData(pokemon){
      let url = pokemon.url;
      await fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
            renderPokemon(pokeData);
      })
}

function renderPokemon(pokeData){
      let allPokemonContainer = document.getElementById('poke-container');
      let pokeContainer = document.createElement('div');
      pokeContainer.classList.add('uicard');

      let pokeIdName = document.createElement('p')
      pokeIdName.innerText = `${pokeData.id}: ${pokeData.name}`

      let pokeImage = document.createElement('img')
      pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`

      let pokeType = document.createElement('p');
      pokeType.innerText = `Type: ${pokeData.types[0].type.name}`;
      if(pokeData.types[0].type.name == 'grass'){
            pokeContainer.style.backgroundColor = 'green';
      } else if(pokeData.types[0].type.name == 'fire'){
            pokeContainer.style.backgroundColor = 'orange';
      } else if(pokeData.types[0].type.name == 'water'){
            pokeContainer.style.backgroundColor = 'blue';
      } else if(pokeData.types[0].type.name == 'bug'){
            pokeContainer.style.backgroundColor = 'gray';
      } else if(pokeData.types[0].type.name == 'normal'){
            pokeContainer.style.backgroundColor = '#f1f1f1';
      } else if(pokeData.types[0].type.name == 'poison'){
            pokeContainer.style.backgroundColor = 'purple';
      } else if(pokeData.types[0].type.name == 'electric'){
            pokeContainer.style.backgroundColor = 'yellow';
      } else if(pokeData.types[0].type.name == 'ground'){
            pokeContainer.style.backgroundColor = 'brown';
      }else{
            console.log('Type not found');
      }
      
      pokeContainer.append(pokeIdName, pokeImage, pokeType);
      allPokemonContainer.appendChild(pokeContainer);
      

}
