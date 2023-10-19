import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="nav-items">
            <p className="item">Product</p>
            <p className="item">Features</p>
            <p className="item">Marketplace</p>
            <p className="item">Company</p>
            <p className="item">Log in</p>
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
