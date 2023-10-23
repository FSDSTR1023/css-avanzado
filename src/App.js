import logo from './logo.svg';
import noticia from './fondo-fullstack.jpg';
import avatar from './avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <div class="nav-items">
        <ul>
          <li>Products</li>
          <li>Features</li>
          <li>MarketPlace</li>
          <li>Company</li>
          <li>Log In</li>
        </ul>
      </div>
    </nav>
      </header>
      <div class="card-wrapper">
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Jane Cooper</h4>
        <p>Paradigm Representative</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Cody Fisher</h4>
        <p>Lead Security Associate</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Esther Howard</h4>
        <p>Assurance Administrator</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Jenny Wilson</h4>
        <p>Chief Accountability Analyst</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Kristin Watson</h4>
        <p>Investor Data Orchestrator</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Cameron Williamson</h4>
        <p>Product Infraestructure Executive</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Courtney Henry</h4>
        <p>Investor Factors Associate</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
      <div class="card">
      <img src={avatar} className="avatar" alt="avatar" />
        <h4>Theresa Webb</h4>
        <p>Global Division Officer</p>
        <p class="admin">admin</p>
        <div class="botones">
          <button>📩Email</button>
          <button>📞Call</button>
        </div>
      </div>
    </div>
    <container class="container">
      <div class="title">
        <h2>From the blog</h2>
        <p>Learn how te grow your business with our expert device</p>
      </div>
      <img src={noticia} className="image1" alt="noticia" />
      <div class="notice1">
        <p class="fecha">mar 14, 2023</p>
        <h4>Boost your conversion rate</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="autor1">
      <img src={avatar} className="avatar" alt="avatar" />
        <div class="nombreAutor1">
          <h5>Michael Foster</h5>
          <p>Co-Founder & CTO</p>
        </div>
      </div>
      <img src={noticia} className="image2" alt="noticia" />
      <div class="notice2">
        <p class="fecha">mar 14, 2023</p>
        <h4>How to use search engine optimization to drive seals</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="autor2">
      <img src={avatar} className="avatar" alt="avatar" />
        <div class="nombreAutor2">
          <h6>Lindsey Walton</h6>
          <p>Front-end Developer</p>
        </div>
      </div>
      <img src={noticia} className="image3" alt="noticia" />
      <div class="notice3">
        <p class="fecha">mar 14, 2023</p>
        <h4>Boost your conversion rate</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="autor3">
      <img src={avatar} className="avatar" alt="avatar" />
        <div class="nombreAutor3">
          <h6>Michael Foster</h6>
          <p>Co-Founder & CTO</p>
        </div>
      </div>
    </container>
    </div>
  );
}

export default App;