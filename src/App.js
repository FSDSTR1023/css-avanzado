import logo from './logo.svg';
import noticia from './fondo-fullstack.jpg';
import avatar from './avatar.png';
import home from './whitehome.png';
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
      <div className='buscador'>
      <input type='text' placeholder='Search...' className='search'></input>
      <ul className='boxSearch'>
        <div className='searchResult'>
        <img src={home} className="whitehome" alt="whitehome" />
        <div className='searchResultTxt'>
        <li>Text</li>
        <p>Add freeform text with basic formatting options.</p>
        </div>
        </div>
        <div className='searchResult'>
        <img src={home} className="whitehome" alt="whitehome" />
        <div className='searchResultTxt'>
        <li>Video</li>
        <p>Add a video from YouTube, Vimeo or other services.</p>
        </div>
        </div>
        <div className='searchResult'>
        <img src={home} className="whitehome" alt="whitehome" />
        <div className='searchResultTxt'>
        <li>Page</li>
        <p>Add a new blank page to your project.</p>
        </div>
        </div>
        <div className='searchResult'>
        <img src={home} className="whitehome" alt="whitehome" />
        <div className='searchResultTxt'>
        <li>Calendar</li>
        <p>Add a full month calendar or a week view calendar.</p>
        </div>
        </div>
        <div className='searchResult'>
        <img src={home} className="whitehome" alt="whitehome" />
        <div className='searchResultTxt'>
        <li>Table</li>
        <p>Add a table for displaying larger sets of data.</p>
        </div>
        </div>
        <div className='searchResult'>
          <img src={home} className="whitehome" alt="whitehome" />
          <div className='searchResultTxt'>
            <li>Code</li>
            <p>Add raw HTML, JavaScript or CSS code.</p>
          </div>
        </div>
      </ul>
    </div>
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
    <container className='Reviews'>
      <div className='starReviews'>
        <h1>Customer Reviews</h1>
        <p>⭐⭐⭐⭐⭐Based on 1624 reviews</p>
        <p>5⭐<input type='range' value="63" className='star1'></input>63%</p>
        <p>4⭐<input type='range' value="10" className='star1'></input>10%</p>
        <p>3⭐<input type='range' value="6" className='star1'></input>6%</p>
        <p>2⭐<input type='range' value="12" className='star1'></input>12%</p>
        <p>1⭐<input type='range' value="9" className='star1'></input>9%</p>
        <p>Share your thoughts</p>
        <p>If you've used this produc, share your thoughts with other customers</p>
        <button>Write a review</button>
      </div>
      <div className='customerReviews'>
        <div className='individualReviews'>
        <div class="autor1">
      <img src={avatar} className="avatar" alt="avatar" />
        <div class="nombreAutor1">
          <h5>Emily Selman</h5>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit and absurd amount of snacks for the many long and hungry flights</p>
        </div>
        <hr></hr>
        <div className='individualReviews'>
        <div class="autor1">
      <img src={avatar} className="avatar" alt="avatar" />
        <div class="nombreAutor1">
          <h5>Hector Gibbons</h5>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <p>Before getting the Ruck Snack, i struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, i can stow my snacks with confidence and style!</p>
        </div>
        <hr></hr>
        <div className='individualReviews'>
        <div class="autor1">
      <img src={avatar} className="avatar" alt="avatar" />
        <div class="nombreAutor1">
          <h5>Mark Edwards</h5>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <p>I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.</p>
        </div>
      </div>
    </container>
    <container className="Users">
      <div className='presentadorUsers'>
      <h3>Users</h3>
      <p>A list of all the users in your account including their name, title, email and role.</p>
      </div>
      <button className='addUser'>Add user</button>
        <p className='nameUser'>Name</p>
        <p className='titleUser'>Title</p>
        <p className='emailUser'>Email</p>
        <p className='roleUser'>Role</p>
        <span></span>
        <p>Lindsay Walton</p>
        <p>Front-end Developer</p>
        <p>lindsay.walton@example.com</p>
        <p>Member</p>
        <a href='edit'>Edit</a>
        <p>Courtney Henry</p>
        <p>Designer</p>
        <p>courtney.henry@example.com</p>
        <p>Admin</p>
        <a href='edit'>Edit</a>
        <p>Tom Cook</p>
        <p>Director of Product</p>
        <p>tom.cook@example.com</p>
        <p>Member</p>
        <a href='edit'>Edit</a>
        <p>Whitney Francis</p>
        <p>Copywriter</p>
        <p>whitney.francis@example.com</p>
        <p>Admin</p>
        <a href='edit'>Edit</a>
        <p>Leonard Krasner</p>
        <p>Senior Designer</p>
        <p>leonard.krasner@example.com</p>
        <p>Owner</p>
        <a href='edit'>Edit</a>
        <p>Floyd Miles</p>
        <p>Principal designer</p>
        <p>floyd.miles@example.com</p>
        <p>Member</p>
        <a href='edit'>Edit</a>
    </container>
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