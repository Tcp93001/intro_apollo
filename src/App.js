import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CardPokemon from './CardPokemon'

function App() {
  const [nombre, setNombrePokemon] = useState('')
  const [getData, setGetData] = useState(true)

  const cambioDeNombre = (event) => {
    setNombrePokemon(event.target.value)
    setGetData(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <p>Experimento con Apollo</p>
        <div>
          <input value={nombre} onChange={event => cambioDeNombre(event)} />
          <button onClick={()=> setGetData(false)}>A buscar!!</button>
            {getData ?
            <p>A buscar pokemones!!!</p>
            : <CardPokemon nombre={nombre} />}

        </div>
      </section>
    </div>
  )
}
export default App;
