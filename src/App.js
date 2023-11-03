import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Encabezado, menu de navegación */}
      <header className="App-nav">

        <img src={logo} className="App-logo" alt="logo" />
        <div className="minombre">F. Averruz</div>
        <ul className="barNav">
          <li className="menu"><a href="#Blog">Blog</a></li>
          <li className="menu"><a href="#Tarjetas">Tarjetas</a></li>
          <li className="menu"><a href="#Reviews">Reseñas</a></li>
        </ul>
        
      </header>

      {/* Layout de Blog: */}

      <section className="sectores fx1 imgposition" id="Blog" name="Blog">
        <div className="margin"></div>
        <h2>BLOG</h2>
        <div className="headerfx1">
          {/* <h2>BLOG</h2> */}
          <p>Aprenda cómo hacer crecer su negocio con nuestro asesoramiento.</p>
        </div>
        <div className="general">
          {" "}
          {/*----------------------------------------- */}
          <div className="espaciogrid">
            <div className="wrapper">
              <article className="artfx">
                <div className="formatoArt imgArt1"></div>
                <div>
                  <div className="lfecha">
                    <p>Noviembre, 2023</p>
                  </div>
                  <div className="descripcion">
                    <h3>Aumente su tasa de conversión</h3>
                    <p>
                      {" "}
                      Si estás buscando formas de aumentar tu tasa de
                      conversión, nosotros podemos ayudarte a conseguirlo de
                      forma rápida y eficaz... <br />
                      <a href=".">leer más</a>
                    </p>
                  </div>
                  <hr /> {/*---------------------------------------- */}
                  <div className="autores">
                    <div className="pic1 fotoAutor"></div>
                    <div className="detAutor">
                      <p className="aut">Michael Foster</p>
                      <p className="prof">Co-fundador / CTO</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="artfx">
                <div className="formatoArt imgArt2"></div>
                <div>
                  <div className="lfecha">
                    <p>Noviembre, 2023</p>
                  </div>
                  <div className="descripcion">
                    <h3>Optimiza los motores de búsqueda</h3>
                    <p>
                      {" "}
                      ¡No te preocupes! Si quieres incursionar en el
                      posicionamiento en buscadores, te explicamos todo lo que
                      tienes que saber sobre la materia...
                      <br />
                      <a href=".">leer más</a>
                    </p>
                  </div>
                  <hr /> {/* ---------------------------------------- */}
                  <div className="autores">
                    <div className="pic2 fotoAutor"></div>
                    <div className="detAutor">
                      <p className="aut">Lindsay Walton</p>
                      <p className="prof">Desarrollador Front-end</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="artfx">
                <div className="formatoArt imgArt3"></div>
                <div>
                  <div className="lfecha">
                    <p>Noviembre, 2023</p>
                  </div>
                  <div className="descripcion">
                    <h3>Mejora la experiencia online</h3>
                    <p>
                      {" "}
                      Las interacciones que las empresas tienen con sus clientes
                      han ido sufriendo una evolución a lo largo de los años...
                      <br />
                      <a href=".">leer más</a>
                    </p>
                  </div>
                  <hr /> {/* ---------------------------------------- */}
                  <div className="autores">
                    <div className="pic3 fotoAutor"></div>
                    <div className="detAutor">
                      <p className="aut">Tom Cook</p>
                      <p className="prof">Director de Producto</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Layout de Tarjetas: */}

      <section
        className="sectores fx2 imgposition"
        id="Tarjetas"
        name="Tarjetas"
      >
        <div className="margin"></div>
        <h2>TARJETAS</h2>
        <div className="generalSec2">
          <div className="contieneTarjetas">
            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt1"></div>
              <div className="infoTarjeta">
                <h1>Jane Cooper</h1>
                <p>Paradigm Representative</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt2"></div>
              <div className="infoTarjeta">
                <h1>Cody Fisher</h1>
                <p>Product Directives Officer</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt3"></div>
              <div className="infoTarjeta">
                <h1>Esther Howard</h1>
                <p>Forward Response Developer</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt4"></div>
              <div className="infoTarjeta">
                <h1>Jenny Wilson</h1>
                <p>Central Security Manager</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt5"></div>
              <div className="infoTarjeta">
                <h1>Kristin Watson</h1>
                <p>Lead Implementation Liaison</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt6"></div>
              <div className="infoTarjeta">
                <h1>Cameron Williamson</h1>
                <p>Internal Applications Engineer</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt7"></div>
              <div className="infoTarjeta">
                <h1>Courtney Henry</h1>
                <p>Investor Factors Associate</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>

            <article className="tar">
              {" "}
              {/*-----::::: tarjeta individual :::::-----*/}
              <div className="picTarjeta pt8"></div>
              <div className="infoTarjeta">
                <h1>Theresa Webb</h1>
                <p>Global Division Officer</p>
                <button>Admin</button>
              </div>
              <div className="contacto">
                <div className="email">
                  <button className="buttonContacto btnEmail">
                    <span>📧</span>E-mail
                  </button>
                </div>
                <div className="tel">
                  <button className="buttonContacto btnCall">
                    <span>📞</span>Llamar
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------  Layout de Reviews: --------------------------*/}

      <section className="sectores fx3 imgposition" id="Reviews" name="Reviews">
        <div className="margin"></div>
        <h2>RESEÑAS</h2>
        <div className="ubicReviews">
          <div className="generalReviews">
            <div className="revIzq">
              <div>
                <h1 className="tituloB">Valoración de los Clientes</h1>
                <p>
                  <span className="spEstrella A">★★★★</span>
                  <span className="spEstrella B">★</span>
                  <span className="SpanTexto">Basado en 1624 valoraciones</span>
                </p>
                <br />
                <br />
              </div>
              {/* -------------------------- Barras NavIzquierda -------------------------------*/}
              <div className="num-barra">
                {" "}
                {/*--------------------------*/}
                <div>
                  <span className="votos">5</span>
                  <span className="spEstrella A">★</span>
                </div>
                <div className="progress">
                  <div className="progress-value pv1"></div>
                </div>
                <span className="porc">63 %</span>
              </div>
              <div className="num-barra">
                {" "}
                {/*--------------------------*/}
                <div>
                  <span className="votos">4</span>
                  <span className="spEstrella A">★</span>
                </div>
                <div className="progress">
                  <div className="progress-value pv2"></div>
                </div>
                <span className="porc">10 %</span>
              </div>
              <div className="num-barra">
                {" "}
                {/*--------------------------*/}
                <div>
                  <span className="votos">3</span>
                  <span className="spEstrella A">★</span>
                </div>
                <div className="progress">
                  <div className="progress-value pv3"></div>
                </div>
                <span className="porc">6 %</span>
              </div>
              <div className="num-barra">
                {" "}
                {/*--------------------------*/}
                <div>
                  <span className="votos">2</span>
                  <span className="spEstrella A">★</span>
                </div>
                <div className="progress">
                  <div className="progress-value pv4"></div>
                </div>
                <span className="porc">12 %</span>
              </div>
              <div className="num-barra">
                {" "}
                {/*--------------------------*/}
                <div>
                  <span className="votos">1</span>
                  <span className="spEstrella A">★</span>
                </div>
                <div className="progress">
                  <div className="progress-value pv5"></div>
                </div>
                <span className="porc">9 %</span>
              </div>

              {/* -------------------------- invitación -------------------------------*/}
              <br />
              <h1 className="tituloB">Comparte tu Opinión</h1>
              <span className="SpanTexto">
                Si has usado nuestro servicio, comparte tu opinión con otros
                usuarios
              </span>
              <br />
              <button className="btn-resena">Escribe tu Reseña</button>
            </div>
            {/* -------------------------- reseñas NavDerecha -------------------------------*/}
            <div className="revDer">
              <div className="generalResena">
              {/* inicio reseña ------------------------------------------------ */}
                <div className="encabezadoResena">
                  <div className="imgRes iR1"></div>
                  <div className="detRes">
                    <span className="nomResena">Emily Selman</span>
                    <span className="spEstrella A">★★★★★</span>
                  </div>
                </div>
                <div className="textoResena">
                  <p>
                  Muchísimas gracias por las sugerencias. Están dando mucha información de valor -y gratis-, sin dudas, implementaremos algunas de las mejoras en nuestro negocio. 
                  </p>
                </div>
                <hr />
                <br />
             {/* fin Reseña---------------------------------------------------- */}
             {/* inicio reseña ------------------------------------------------ */}
              <div className="encabezadoResena">
                  <div className="imgRes iR2"></div>
                  <div className="detRes">
                    <span className="nomResena">Mark Edwards</span>
                    <span className="spEstrella A">★★★★★</span>
                  </div>
                </div>
                <div className="textoResena">
                  <p>
                  El servicio al cliente de esta empresa es excepcional. Resolvieron rápidamente mi problema y fueron amables y atentos en todo momento. ¡Gracias por una gran experiencia!
                  </p>
                </div>
                <hr />
                <br />
             {/* fin Reseña---------------------------------------------------- */}
             {/* inicio reseña ------------------------------------------------ */}
               <div className="encabezadoResena">
                  <div className="imgRes iR3"></div>
                  <div className="detRes">
                    <span className="nomResena">Hector Gibbons</span>
                    <span>
                    <span className="spEstrella A">★★★★</span>
                    <span className="spEstrella B">★</span>                      
                    </span>

                  </div>
                </div>
                <div className="textoResena">
                  <p>
                  Este producto realmente ha simplificado mi vida. Su diseño intuitivo y funcionalidad excepcional lo convierten en una herramienta imprescindible para mi trabajo diario, lo unico negativo es el precio.
                  </p>
                </div>
                <hr />
                <br />
             {/* fin Reseña---------------------------------------------------- */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
