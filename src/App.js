import logo from './logo.svg';
import './styles/styles.css';
import tennisBlancos from "./media/Blancos.jpg"
import tennisNegros from "./media/Negros.jpg"

function App() {
  return (
    <div className="App">
  <header>
      
  </header>
  <main>
     <ul className="navbar">
      <li>
          <button className="Button mainButton">Agregar Producto</button>
      </li>
      <li> 
          <div className="buscar">
              <input placeholder="Buscar producto"/>
              <i className="fas fa-search logoBusqueda"></i>
          </div>
      </li>
      <li>Iniciar Sesión</li>
      <li><button className="Button secondaryButton">Editar Producto</button></li>
  </ul>
  <section>
      <h2>PRODUCTOS</h2>
      <ul className="formaConteiner">
          <li className="espacioEntreImagenes">
              <div className="contenedorImagen">
                <img src= {tennisBlancos} alt="Imagen tennis blancos" />
               </div>
              <span className="estiloNombre">Tennis Blancos</span>         
          </li>
          <li className="espacioEntreImagenes">
                <div className="contenedorImagen">
                  <img src= {tennisNegros} alt="Imagen tennis negros" />
                </div>
              <span className="estiloNombre">Tennis Negros</span>  
          </li>
      </ul>
  </section>
</main>
<footer></footer>
    </div>
  );
}

export default App;
