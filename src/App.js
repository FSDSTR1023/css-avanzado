import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Encabezado, menu de navegación */}
        <header className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="barNav">
            <li className="menu"><a href="#Blog">Blog</a></li>
            <li className="menu"><a href="#Tarjetas">Tarjetas</a></li>
            <li className="menu"><a href="#Reviews">Reviews</a></li>
          </ul>
        </header>
      
      {/* Layout de Blog: */}

      <section className="sectores fx1" id="Blog" name="Blog">
        <div className="headerfx1">
          <h2>BLOG</h2>
          <p>Aprenda cómo hacer crecer su negocio con nuestro asesoramiento.</p>
        </div>
        <div className="espaciogrid">
          <div className="wrapper">
            <article className="artfx">
              <div className="formatoArt imgArt1">
              </div>
              <div>
                <div className="lfecha">
                  <p>Mar 10,2023</p>
                  <button>Mercadeo</button>  
                </div>
                <div className="descripcion">
                  <h3>Aumente su tasa de conversión</h3>
                  <p>  Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
  blandit vitae.</p>
                </div>
                {/* <div className="autores">
                  <div>🧔</div>
                  <div>
                    <p>Michael Foster</p>
                    <p>Co-Founder / CTO</p>
                  </div>
                </div> */}
              </div>
            </article>

            <article className="artfx">
              <div className="formatoArt imgArt2">
              </div>
              <div>
                <div className="lfecha">
                  <p>Mar 10,2023</p>
                  <button>Ventas</button>  
                </div>
                <div className="descripcion">
                  <h3>Cómo optimizar los motores de búsqueda</h3>
                  <p>  Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
  blandit vitae.</p>
                </div>
                {/* <div className="autores">
                  <div>🧔</div>
                  <div>
                    <p>Michael Foster</p>
                    <p>Co-Founder / CTO</p>
                  </div>
                </div> */}
              </div>
            </article>

            <article className="artfx">
              <div className="formatoArt imgArt3">
              </div>
              <div>
                <div className="lfecha">
                  <p>Mar 10,2023</p>
                  <button>Negocios</button>  
                </div>
                <div className="descripcion">
                  <h3>Mejora la experiencia de tus clientes</h3>
                  <p>  Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
  blandit vitae.</p>
                </div>
                {/* <div className="autores">
                  <div>🧔</div>
                  <div>
                    <p>Michael Foster</p>
                    <p>Co-Founder / CTO</p>
                  </div>
                </div> */}
              </div>
            </article>

          </div>
        </div>
      </section>
      <section className="sectores fx2" id="Tarjetas" name="Tarjetas">

      </section>
      <section className="sectores fx3" id="Reviews" name="Reviews">

      </section>
    </div>
  );
}

export default App;
