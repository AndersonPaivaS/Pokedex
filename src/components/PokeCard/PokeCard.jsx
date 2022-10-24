import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './PokeCard.css'

export default function PokeCard() {

  const [pokemons, setPokemons] = useState([])

  const [img, setImg] = useState(false)

  const mudarFoto = () => {
    setImg(!img)
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res))

  }

  const pokemonFilter = (e) => {
    let input = e.target.value
    let filteredPokemons = []

    if(input=== "") {
      getPokemons()
    }
    for(var i in pokemons) {

      if(pokemons[i].data.name.includes(input)) {
        filteredPokemons.push(pokemons[i]);

      }
    }
    setPokemons(filteredPokemons)
  }
  

  return (
    <div>
      
      
      <div className='inputCard'>
          <input onChange={pokemonFilter} className='input' type="text" placeholder='Pesquisar Pokémon' />
        </div>
        <div className='cards'>
          {pokemons.map((poke) => (
            <div className='card'>

              {img == false ?
              <img src={poke.data.sprites.front_default} alt="Pokémon"/> :
              <img src={poke.data.sprites.back_default} alt="Pokémon" />
          }
          <h1> {poke.data.name} </h1>
          <button onClick={mudarFoto} className='botao-card'>+</button>
          
        </div>
        ))}
      </div>
    </div>
  )
} 
