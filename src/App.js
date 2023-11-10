import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <nav className= "nav-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className= "nav-items">
          <li>Products</li>
          <li>Features</li>
          <li>Marketplace</li>
          <li>Company</li>
          <li>users</li>
        </ul>
        
      </nav>
        <body>
          <h1>Tarjetas de contacto</h1>
          <br></br>
          <div class="container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </body>
        
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
