// const CardPersonajes = (props) => {
//   return (
//     <div className="card col-3" >
//       <img src={props.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{props.name}</h5>
//         <p className="card-text">{props.species} species and status {props.status}.</p>
//         <a href={props.url} className="btn btn-primary">Personaje</a>
//       </div>
//     </div>
//   );
// }
const CardPersonajes = (props) => {
// const CardPersonajes = ({ image, name, species, url, status, id }) => {
  const { image, name, species, url, status, id } = props

  const handleClick = async(id) =>{
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const json = await data.json();
    console.log(json);
    const cadJSON = JSON.stringify(json);
    localStorage.setItem('personaje', cadJSON);

    window.location.href='/detail';

  }

  return (
    <div className="card col-3" >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{species} species and status {status}.</p>
        <a href={url} className="btn btn-primary me-1">JSON</a>
        <button className="btn btn-primary" onClick={() => handleClick(id)}>Detail</button>
      </div>
    </div>
  );
}

export default CardPersonajes;