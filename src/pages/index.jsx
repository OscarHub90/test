
import TennisDeportivos from 'components/TennisDeportivos';
import logo from "media/Tech&Fun.png";
import tennisBlancos from "media/Blancos.jpg";
import tennisNegros from "media/Negros.jpg";
import Footer from 'components/Footer';

function Index(){
    return(
        <div>
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
              <TennisDeportivos Referencia="Tennis Blancos" imagen={tennisBlancos}/>
              <TennisDeportivos Referencia= "Tennis Negros" imagen={tennisNegros}/>
              <TennisDeportivos Referencia= "Tennis Blancos"imagen={tennisBlancos}/>
            </ul>
        </section>
        </main>
        <Footer />
        </div>
    )
}
export default Index;