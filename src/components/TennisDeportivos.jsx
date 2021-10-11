function TennisDeportivos({imagen,Referencia}){
    return (
    <li className="espacioEntreImagenes">
    <div className="contenedorImagen">
      <img src= {imagen} alt= "Alt"/>
     </div>
    <span className="estiloNombre"> {Referencia}</span>       
  </li>)
}

export default TennisDeportivos;