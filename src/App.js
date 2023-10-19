import logo from './logo.svg';

import userImage from './user.png';

import lapiz from './lapiz.png';
import video from './video.png';
import pagina from './pagina.png';
import calendario from './calendario.png';
import tabla from './tabla.png';
import code from './code.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Ejercicio 1 */}
        <h2>Ejercicio 1</h2>
        <nav class="nav-wrapper">
          <div id="contenedor-logo-ej1">
            <img src={logo} class="App-logo" id="logo-ej1" alt="logo" />
          </div>
          <ul id="lista-ej1">
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in →</li>
          </ul>
        </nav>
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      {/* Ejercicio 2 */}
      <section>
        <h2>Ejercicio 2</h2>
        <div class="tarjetas-ej2">
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 1</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 2</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 3</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 4</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 5</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 6</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 7</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 8</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Ejercicio 3 */}
      <section id="ejercicio3">
        <h2 id="tituloEjercicio3">Ejercicio 3</h2>
        <div id="toolBar">
          <div class="tool">
            <img src={lapiz} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Text</p>
              <p class="toolDescription">Add freeform text with basic formating options.</p>
            </div>
          </div>
          <div class="tool">
            <img src={video} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Video</p>
              <p class="toolDescription">Add a video from Youtube, Vimeo or other services.</p>
            </div>
          </div>
          <div class="tool">
            <img src={pagina} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Page</p>
              <p class="toolDescription">Add a new blank page to your project.</p>
            </div>
          </div>
          <div class="tool">
            <img src={calendario} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Calendar</p>
              <p class="toolDescription">Add a full month calendar or a week view calendar.</p>
            </div>
          </div>
          <div class="tool">
            <img src={tabla} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Table</p>
              <p class="toolDescription">Add a table for displaying larger sets of data.</p>
            </div>
          </div>
          <div class="tool">
            <img src={code} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Code</p>
              <p class="toolDescription">Add raw HTML, JavaScript or CSS code.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
