import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Ejercicio 1 */}
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
    </div>
  );
}

export default App;
