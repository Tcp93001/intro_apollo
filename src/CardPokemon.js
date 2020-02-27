
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
  }
`

const CardPokemon = (props) => {
  console.log(props)
  const datos = props.data.pokemon

  return (
    <div>
      {datos === undefined || datos === null ?
        <p>Loading...</p>
        : <div className="imagen_tarjeta">
            <p>Nombre: {datos.name}</p>
            <img className="imagen_pokemon" alt="imagen pokemon" src={datos === undefined ? '' : datos.image} />
          </div>
      }
    </div>
  );

}

export default graphql(consultarPokemon)(CardPokemon);