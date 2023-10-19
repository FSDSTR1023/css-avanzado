import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav className='nav-wrapper'>
          <img src={logo} className="nav-logo" alt="logo" />
          <ul className='nav-items'>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Users</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
