import axios from "axios";
import { useState, useEffect } from "react";
import CardPersonajes from "../../components/CardPersonajes/CardPersonajes";

const Home = () => {

  // const [personajes, setPersonajes] = useState({});
  const [personajes, setPersonajes] = useState([]);

  const getPersonajes = async() => {
    const resp = await axios.get('https://rickandmortyapi.com/api/character');
    // console.log('Response API: ', resp);
    setPersonajes(resp);
    setPersonajes(resp.data.results);
  }
  console.log('State almacenado: ', personajes)

  useEffect( () => {
    getPersonajes();
  }, [])

  return ( 
    <main>
      <button className="btn btn-danger" onClick={getPersonajes}>Obtener Personajes</button>
      <section className="row">
        {
          personajes.length >0 && personajes.map(personaje => <CardPersonajes image={personaje.image} name={personaje.name} title={personaje.title} species={personaje.species} url={personaje.url} status={personaje.status} key={personaje.id} />)
        }
      </section>
    </main>
  );
}

export default Home;