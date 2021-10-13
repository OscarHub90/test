import { Link } from "react-router-dom";

function TennisDeportivos({imagen,Referencia}){
    return (
    <li className="espacioEntreImagenes">
      <Link to="/TennisWhite" >
          <div className="contenedorImagen">
              <img src= {imagen} alt= "Alt"/>
          </div>
      </Link>
    <span className="estiloNombre"> {Referencia}</span>       
  </li>)
}

export default TennisDeportivos;