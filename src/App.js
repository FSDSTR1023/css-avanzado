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
        <section id="grid">
          <div class="container-grid">
            <div class="caja-1">
              <h3>Users</h3>
              <p>A list of all the users in your account including their name, title, email and role.</p>
            </div>
            <div class="caja-2">
              <button>Add user</button>
            </div>
          </div>
            <article>
              <p class="cabecera">Name</p>
              <p Title class="cabecera">Title</p>
              <p Email class="cabecera">Email</p>
              <p class="cabecera">Role</p>
              <p class="cabecera"></p>
              <h4>Lindsay Walton</h4>
              <p>Front-end Developer</p>
              <p>lindsay.walton@example.com</p>
              <p>Member</p>
              <p>Edit</p>
              <h4>Courtney Henry</h4>
              <p>Designer</p>
              <p>courtney.henry@example.com</p>
              <p>Admin</p>
              <p>Edit</p>
              <h4>Tom Cook</h4>
              <p>Direct of Product</p>
              <p>tom.cook@example.com</p>
              <p>Member</p>
              <p>Edit</p>
              <h4>Whitney Francis</h4>
              <p>Copywriter</p>
              <p>whitney.francis@example.com</p>
              <p>Admin</p>
              <p>Edit</p>
              <h4>Leonard Krasner</h4>
              <p>Senior Designer</p>
              <p>leonard.krasner@example.com</p>
              <p>Owner</p>
              <p>Edit</p>
              <h4>Floyd Miles</h4>
              <p>Principal Designer</p>
              <p>floyd.Miles@example.com</p>
              <p>Member</p>
              <p>Edit</p>
            </article>
          
        </section>

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
