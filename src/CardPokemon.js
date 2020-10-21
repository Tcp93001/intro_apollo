
import React from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const consultarPokemon = gql`
  query consultaPokemon($nombre: String){
    pokemon(name: $nombre) {
      id
      number
      name
      image
    }

    pokemons(first:10){
      name
      classification
      attacks {
        special {
          name
          type
          damage
        }
      }
      image
    }
  }
`

const CardPokemon = (props) => {
  console.log(props)
  const datos = props.data.pokemon || null
  const pokemones = props.data.pokemons || null

  return (
    <div>
      {datos === null ?
        <p>No existe el Pokemon que buscas</p>
        : <div className="imagen_tarjeta">
            <p>Nombre: {datos.name}</p>
            <img className="imagen_pokemon" alt="imagen pokemon" src={datos === undefined ? '' : datos.image} />
          </div>
      }

      {pokemones === null ?
        <p>No tenemos todavía la infromación completa</p>
        : pokemones.map(elem =>{
            return (<div className="imagen_tarjeta">
              <p>Nombre: {elem.name}</p>
              <img className="imagen_pokemon" alt="imagen pokemon" src={elem === undefined ? '' : elem.image} key={elem.name} />
            </div>
        )})
      }
    </div>
  );

}

export default graphql(consultarPokemon)(CardPokemon);