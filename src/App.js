import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-wrapper'>
        <img src={logo} className="App-logo" alt="logo" />
          <ul className='nav-item'>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in </li>
          </ul>
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
