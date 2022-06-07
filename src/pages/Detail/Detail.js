import { useEffect, useState } from "react";

const Detail = () => {

  const [personaje, setPersonaje] = useState({});

  const obtenerPersonaje = () => {
    const cadJSON = localStorage.getItem('personaje');
    console.log('JSON: ', cadJSON);
    const objJS = JSON.parse(cadJSON)
    setPersonaje(objJS);
  }
  
  useEffect(() => {
    obtenerPersonaje()
  }, [])

  console.log('objeto personaje: ', personaje)

  return ( 
    <section>
      <img src={personaje.image} />
      <h3>{personaje.name}</h3>
      <p>{personaje.species}</p>
      {
        // personaje.episode.length > 0 ? ( personaje.episode.map( (episodio, i) => <a key={i} href={episodio} className="me-1">{i + 1}</a>) ) : (<p>Este personaje no tiene capitulos</p>)
        // personaje.episode?.length > 0 && ( personaje.episode.map( (episodio, i) => <a key={i} href={episodio} className="me-1">{i + 1}</a>) ) 
        personaje.episode?.map( (episodio, i) => <a key={i} href={episodio} className="me-1">{i + 1}</a>)
        
      }
    </section>
  );
}

export default Detail;