import './styles/styles.css';
import tennisBlancos from "./media/Blancos.jpg"
import tennisNegros from "./media/Negros.jpg"
import logo from "./media/Tech&Fun.png"

function App() {
  return (
    <div className="App">
  <header>

  </header>
  <main>
     <ul className="navbar">
     <li>
        <div className="logoPpal">
          <img src={logo} alt="" />          
        </div>
      </li>
      <li>
          <button className="Button mainButton">Agregar Producto</button>
      </li>
      <li> 
          <div className="buscar">
              <input placeholder="Buscar producto"/>
              <i className="fas fa-search logoBusqueda"></i>
          </div>
      </li>
      <li><button className="Button secondaryButton">Editar Producto</button></li>
      
  </ul>
  <section>
      <h2>PRODUCTOS</h2>
      <ul className="formaConteiner">
        <TennisDeportivos />
        <TennisDeportivos />
        <TennisDeportivos />
      </ul>
  </section>
</main>
<footer></footer>
    </div>
  );
}

function TennisDeportivos(){
  return (
  <li className="espacioEntreImagenes">
  <div className="contenedorImagen">
    <img src= {tennisBlancos} alt="Imagen tennis blancos" />
   </div>
  <span className="estiloNombre">Tennis Blancos</span>         
</li>)
}
export default App;
