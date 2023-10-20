import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-start">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='nav-list'>
          <li>Nuestros productos</li>
          <li>Tienda</li>
          <li>Nosotros</li>
          <li>Contacto</li>
          <li>Iniciar sesión</li>
      </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
