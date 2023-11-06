import logo from './logo.svg';
import './App.css';
import icon from './icon.svg';


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
      <div className='ejercicio-cards'>
        <div className='card-row'>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
        </div>
        <div className='card-row'>
        <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
          <div className='card'>
            <img src={icon} alt="icon"/>
            <h3>QuienSea Whoever</h3>
            <h4>Lo que sea, whatever</h4>
            <button className='rol'>Admin</button>
            <div className='buttons-row'>
              <h3>eMail</h3>
              <h3>Call</h3>
            </div>
          </div>
        </div>
        <div className='ejercicio-palette'>
          <div className='palette'>
            <input type="text" />
            <ul>
              <li>
                Emily Selman
              </li>
              <li>
                Emma Dorsley
              </li>
              <li>
                Benjamin Russel
              </li>
              <li>
                Chelsea Hagon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
