import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ejercicio-navbar">
      <header className="App-header">
        <nav className='nav-navbar'>
          <img src={logo} className='App-logo' alt="logo" />
          <ul className='list'>
            <li>Products</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in →</li>
          </ul>
        </nav>
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
