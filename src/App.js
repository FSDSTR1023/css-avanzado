import logo from './logo.svg';
import './ App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nav-items">
        <ul>
          <li>Products</li>
          <li>Features</li>
          <li>MarketPlace</li>
          <li>Company</li>
          <li>Log In</li>
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
