import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='nav-container'>
          <ul>
            <li>
              <img
                src={logo}
                className='App-logo'
                alt='logo'
              />
            </li>
          </ul>
          <ul className='nav-items'>
            <li>Product</li>
            <li>Feauters</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
