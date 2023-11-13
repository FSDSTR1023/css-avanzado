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
          <div className="container">

            <div className="box">
              <img alt="foto1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
              <h5>Jane Cooperr</h5>
              <p>Paradigm Representative</p>
              <p className="admin">Admin</p>
              <div className="button">
                <button>✉️Email</button>
                <button>📞Call</button>
              </div>
            </div>
            
            <div className="box">
            <img alt="foto2" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
              <h5>Cody Fisher</h5>
              <p>Lead Security Associate</p>
              <p className="admin">Admin</p>
              <div className="button">
                <button>✉️Email</button>
                <button>📞Call</button>
              </div>
            </div>

            <div className="box">
            <img alt="foto3" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
              <h5>Esther Howard</h5>
              <p>Assurance Administrator</p>
              <p className="admin">Admin</p>
              <div className="button">
                <button>✉️Email</button>
                <button>📞Call</button>
              </div>
            </div>

            <div className="box">
            <img alt="foto4" src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
              <h5>Jenny Wilson</h5>
              <p>Chief Accountability Analyst</p>
              <p className="admin">Admin</p>
              <div className="button">
                <button>✉️Email</button>
                <button>📞Call</button>
              </div>
            </div>

            <div className="box">
            <img alt="foto5" src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
              <h5>Kristin Watson</h5>
              <p>Investor Data Orchestrator</p>
              <p className="admin">Admin</p>
              <div className="button">
                <button>✉️Email</button>
                <button>📞Call</button>
              </div>
            </div>

            <div className="box">
            <img alt="foto6" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
              <h5>Cameron Williamson</h5>
              <p>Product Infrastructure Executive</p>
              <p className="admin">Admin</p>
              <div className="button">
                <button>✉️Email</button>
                <button>📞Call</button>
              </div>
            </div>
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
