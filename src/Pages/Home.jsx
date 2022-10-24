import React, {useState} from 'react'
import NavBar from '../components/NavBar/NavBar'
import PokeCard from '../components/PokeCard/PokeCard'
import './Home.css'

export default function Home() {

  const [pokemon, setPokemon] = useState(false)

  const handlePokemon = () => {
    setPokemon(!pokemon)
  }

  return (
    <div>
        <NavBar/>
        <div className='content'>

            <div className='botoes'>
              <button onClick={handlePokemon}
              className='botao'>
              Pokédex </button>
            </div>

            <div className='pokeCard'>
                {pokemon == true && (
                  <PokeCard />
                )}
            </div>
              
            
        </div>    
    </div>
  )
}
 