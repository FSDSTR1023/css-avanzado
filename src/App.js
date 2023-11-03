import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><body className="App">
      
    {/* FELXBOX */}
    {/* PRIMER EJERCICIO */}
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

    {/* SEGUNDO EJERCICIO */}
      <main>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Jane Cooper</h3>
            <p>Paradigm Representative</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Cody Fisher</h3>
            <p>Lead Security Associate</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Esther Howard</h3>
            <p>Assurance Administrator</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Jenny Wilson</h3>
            <p>Chief Accountability Analyst</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Kristin Watson</h3>
            <p>Investor Data Orchestrator</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Cameron Williamsone</h3>
            <p>Product Infrastructure Executive</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Courtney Henry</h3>
            <p>Investor Factors Associate</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
        <section className='card-wrapper'>
          <div className='card-info'>
            <img src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Personal'></img>
            <h3>Theresa Webb</h3>
            <p>Global Division Officer</p>
            <p className='card-info-workStatus'>Admin</p>
          </div>
          <div className='card-contact'>
            <div className='card-email'>
            <span className="material-symbols-outlined">contact_mail</span>
              <p>Email</p>
            </div>
            <div className='card-phone'>
            <span className="material-symbols-outlined">call</span>
              <p>Call</p>
            </div>
          </div>
        </section>
      </main>

    {/* TERCER EJERCICIO */}
    <div>
      <div id='navigation'>
        <div id='searchBar'>
          <img src='https://www.svgrepo.com/show/486229/magnifying-glass-backup.svg' alt='Search' />
          <input className='searchText' type='text' placeholder='Search'/>
        </div>
        <ul id='options'>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/468382/create-note-alt.svg' alt='Text formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Text</p>
              <p>Add freeform text with basic formatting options.</p>
            </div>
          </li>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/470257/video-recorder.svg' alt='Video formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Video</p>
              <p>Add a video from YouTube, Vimeo or other services.</p>
            </div>
          </li>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/467646/copy-5.svg' alt='Page formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Page</p>
              <p>Add a new blank page to your project.</p>
            </div>
          </li>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/468159/calendar-event.svg' alt='Calendar formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Calendar</p>
              <p>Add a full month calendar or a week view calendar.</p>
            </div>
          </li>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/467637/columns-3-2.svg' alt='Table formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Table</p>
              <p>Add a table for displaying larger sets of data.</p>
            </div>
          </li>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/468819/file-code.svg' alt='Code formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Code</p>
              <p>Add raw HTML, JavaScript or CSS code.</p>
            </div>
          </li>
          <li className='optionsBar'>
            <div className='optionsBarImg'>
              <img src='https://www.svgrepo.com/show/469052/image-frame.svg' alt='Images formulary icon'/>
            </div>
            <div className='optionsBarText'>
              <p className='optionsBarTextTitle'>Image</p>
              <p>Add a simple image or a photo gallery.</p>
            </div>
          </li>
        </ul>
      </div>
      
    </div>



    {/* GRID */}
    {/* PRIMER EJERCICIO */}
      <article className='layout'>
        <div className='layout-head'>
          <h2>From the blog</h2>
          <p>Learn how to grow your business with our expert advice.</p>
        </div>
        <div className='layout-card'>
          <div className='layout-card-info'>
            <img src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80' alt='Desktop'></img>
            <div className='layout-card-date'>
              <time dateTime='2023-10-18'>18 oct. 2023</time>
              <a href='#'>Marketing</a>
            </div>
            <div>
              <h3>Boost your conversion rate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='layout-card-person'>
              <img src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'  className='writer-img'></img>
              <p className='writer-name'>Michael Foster</p>
              <p className='writer-job'>Co-Founder / CTO</p>
            </div>
          </div>
          <div className='layout-card-info'>
            <img src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80' alt='Desktop'></img>
            <div className='layout-card-date'>
              <time dateTime='2023-10-19'>19 oct. 2023</time>
              <a href='#'>Sales</a>
            </div>
            <div>
              <h3>Boost your conversion rate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='layout-card-person'>
              <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className='writer-img'></img>
              <p className='writer-name'>Michael Foster</p>
              <p className='writer-job'>Co-Founder / CTO</p>
            </div>
          </div>
          <div className='layout-card-info'>
            <img src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80' alt='Desktop'></img>
            <div className='layout-card-date'>
              <time dateTime='2023-10-20'>20 oct. 2023</time>
              <a href='#'>Bussines</a>
            </div>
            <div>
              <h3>Boost your conversion rate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='layout-card-person'>
              <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'  className='writer-img'></img>
              <p className='writer-name'>Michael Foster</p>
              <p className='writer-job'>Co-Founder / CTO</p>
            </div>
          </div>
        </div>        
      </article>

      {/* SEGUNDO EJERCICIO */}
        <div>

        </div>


    </body></>
  );
}

export default App;

