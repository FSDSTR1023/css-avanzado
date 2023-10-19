import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-wrapper'>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <ul className='nav-items'>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplaces</li>
            <li>Company</li>
            <li>Log in</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
