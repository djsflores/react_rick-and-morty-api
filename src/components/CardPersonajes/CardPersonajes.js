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
// const CardPersonajes = ({ image, name, species, url, status }) => {
  const { image, name, species, url, status } = props
  return (
    <div className="card col-3" >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{species} species and status {status}.</p>
        <a href={url} className="btn btn-primary">Personaje</a>
      </div>
    </div>
  );
}

export default CardPersonajes;