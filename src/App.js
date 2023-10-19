import logo from './logo.svg';
import userImage from './user.png';
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
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 2</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 3</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 4</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 5</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 6</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 7</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 8</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p>Email</p>
              <p>Call</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
