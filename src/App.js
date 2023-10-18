import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="links-container">
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
        </div>
        
      </div>        
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
