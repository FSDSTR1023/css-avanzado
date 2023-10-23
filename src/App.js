import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='container'>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ul className='contenido'>
            <li>Product</li>
            <li>Feacture</li>
            <li>MarketPleace</li>
            <li>company</li>
            <li>log in</li>
          </ul>
        </div>
        </nav>
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
