import logo from './logo.svg';
import './App.css';
import Movies from './movies';

function App() {
  const movies = [[
    {
    "title": "Antebellum",
    "year": 2020,
    "cast": [
    "Janelle Monáe",
    "Eric Lange",
    "Jena Malone",
    "Jack Huston",
    "Kiersey Clemons",
    "Gabourey Sidibe"
    ],
    "genres": [
    "Thriller"
    ],
    "href": "Antebellum_(film)",
    "extract": "Antebellum is a 2020 American thriller film written and directed by Gerard Bush and Christopher Renz in their feature directorial debuts. The film stars Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons, and Gabourey Sidibe, and follows a 21st century African-American woman who wakes to find herself mysteriously in a Southern slave plantation from which she must escape.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/2/2e/Antebellum_poster.jpeg",
    "thumbnail_width": 259,
    "thumbnail_height": 384
    },
    {
    "title": "The Nest",
    "year": 2020,
    "cast": [
    "Jude Law",
    "Carrie Coon",
    "Charlie Shotwell",
    "Oona Roche",
    "Adeel Akhtar"
    ],
    "genres": [
    "Drama",
    "Romance"
    ],
    "href": "The_Nest_(2020_film)",
    "extract": "The Nest is a 2020 romantic drama film written, directed, and produced by Sean Durkin. The film stars stars Jude Law, Carrie Coon, Charlie Shotwell, Oona Roche, and Adeel Akhtar.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Nest_poster.jpeg",
    "thumbnail_width": 259,
    "thumbnail_height": 384
    },
    {
    "title": "Blackbird",
    "year": 2020,
    "cast": [
    "Susan Sarandon",
    "Kate Winslet",
    "Mia Wasikowska",
    "Lindsay Duncan",
    "Rainn Wilson",
    "Bex Taylor-Klaus",
    "Sam Neill"
    ],
    "genres": [
    "Drama"
    ],
    "href": "Blackbird_(2019_film)",
    "extract": "Blackbird is a 2019 American drama film directed by Roger Michell and written by Christian Torpe. It is a remake of the 2014 Danish film Silent Heart, also written by Torpe. It stars Susan Sarandon, Kate Winslet, Mia Wasikowska, Lindsay Duncan, Rainn Wilson, Bex Taylor-Klaus, and Sam Neill.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/4d/Blackbird_poster.jpg",
    "thumbnail_width": 259,
    "thumbnail_height": 384
    },
    {
    "title": "Lost Girls & Love Hotels",
    "year": 2020,
    "cast": [
    "Alexandra Daddario",
    "Takehiro Hira",
    "Carice van Houten"
    ],
    "genres": [
    "Drama",
    "Erotic",
    "Thriller"
    ],
    "href": "Lost_Girls_%26_Love_Hotels",
    "extract": "Lost Girls & Love Hotels is a 2020 American erotic thriller drama film directed by William Olsson from a screenplay by Catherine Hanrahan, based on Hanrahan's 2006 novel Lost Girls and Love Hotels. The film stars Alexandra Daddario as an American English teacher in Tokyo, who loses herself to the city's nightlife and begins an affair with a member of the Yakuza gangs. It was released through video on demand on September 18, 2020, by Astrakan Film AB.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/4/44/Lost_Girls_%26_Love_Hotels_film_poster.png",
    "thumbnail_width": 220,
    "thumbnail_height": 322
    },
    {
    "title": "Killian & the Comeback Kids",
    "year": 2020,
    "cast": [
    "Taylor A. Purdee",
    "John Donchak",
    "Nathan Purdee",
    "Kassie DePaiva"
    ],
    "genres": [
    "Musical"
    ],
    "href": "Killian_%26_the_Comeback_Kids",
    "extract": "Killian & the Comeback Kids is a 2020 American folk-rock musical film written and directed by Taylor A. Purdee. The film stars Purdee, John Donchak, Nathan Purdee, and Kassie DePaiva along with an ensemble cast that features Maddi Jane and Lee Grant. Killian & the Comeback Kids follows a mixed-race musician who finds himself back in his struggling rural hometown after graduating from an expensive university. The film's screenplay and original music have been preserved by The Academy of Motion Pictures Arts and Sciences' permanent archive."
    }
    ]

  ];


  console.log("movies", movies);










  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-wrapper'>
          <img src={logo} className="App-logo" alt="logo" />
          <ul className='nav-items'>
            <il>Product</il>
            <il>Features</il>
            <il>Markeplace</il>
            <il>Company</il>
            <il>Log in</il>
          </ul>
        </nav>
       
{/*<Movies /> */}
      </header>
      <main className='main'>
      <div className='content-card'>
        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Jane Cooper</h3>
          <p>Paradigm Representative</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Cody Fisher</h3>
          <p>Lead Security Associate</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Esther Howard</h3>
          <p>Assurance Administrator</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Jenny Wilson</h3>
          <p>Chief Accountability Analyst</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Kristin Watson</h3>
          <p>Investor Data Orchestrator</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Cameron Williamson</h3>
          <p>Product Infrastructure Executive</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Courtney Henry</h3>
          <p>Investor Factors Associate</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>

        <div className='card'>
        <div className='datos'>
          <div className='foto'><img className="circular" src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'></img>
          </div>
          <h3>Theresa Webb</h3>
          <p>Global Division Officer</p>
          <did className="admin">Admin</did>
        </div>
          <div className='contac'>
          <div className='botones'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Mail</div>
          <div className='botones botonderecha'><img className="imagenicono" src='https://cdn-icons-png.flaticon.com/128/403/403500.png'></img>Call</div>
        </div>
        </div>



        
        




      </div>
      </main>

    <div className='main'>


      <div className='contenedorbarra'>
        
      </div>
      </div>
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
    </div>
  );
}

export default App;
