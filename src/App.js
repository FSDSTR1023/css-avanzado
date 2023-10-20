import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
      </header>
    <body>
        <div className="container-cards">
          <div className="card">
            <div className="perfil">
              <img src="jane.jpg" alt="foto-jane"></img>
              <h3>Jane Cooper</h3>
              <p>Paradigm Representative</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="/cody.jpg" alt="foto-cody"></img>
              <h3>Cody Fisher</h3>
              <p>Lead Security Associate</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="Esther.jpg" alt="foto-Esther"></img>
              <h3>Esther Foward</h3>
              <p>Assurance Administrator</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="jenny.jpg" alt="foto-jenny"></img>
              <h3>Jenny Wilson</h3>
              <p>Chief Accountability Analyst</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="kristin.jpeg" alt="foto-kristin"></img>
              <h3>Kristin Watson</h3>
              <p>Investor Data Orchestrator</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="cameron.jpg" alt="foto-Cameron"></img>
              <h3>Cameron Williamson</h3>
              <p>Product Infrastructure Executive</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="courtney.jpg" alt="foto-Courtney"></img>
              <h3>Courtney Henry</h3>
              <p>Investor Factors Associate</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="perfil">
              <img src="theresa.jpg" alt="foto-Theresa"></img>
              <h3>Theresa Webb</h3>
              <p>Global Division Officer</p>
              <button>Admin</button>
            </div>
            <div id="box-mail-call">
              <div className="email-button">
                <img src="pictograma email.jpg" alt="icono-email"></img>
                <p>Email</p>
              </div>
              <div className="call-button">
                <img src="pictograma phone.jpg" alt="icono-telefono"></img>
                <p>Call</p>
              </div>
            </div>
          </div>
        </div>

        <p id="info">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
    </body>
    </div>
  );
}

export default App;
