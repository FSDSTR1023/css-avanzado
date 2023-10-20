import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="nav-wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="nav-items">
        <li>Product</li>
        <li>Features</li>
        <li>Marketplace</li>
        <li>Company</li>
        <li>Log in</li>
        <li></li>
      </ul>
      </nav>

      <div class="cards">
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Jane"></img>
            <h3>Jane Cooper</h3>
            <p>Paradigm Representative</p>
            <button className="admin">Admin</button>
            </div>
            <div className="contact">
              <button className="contact-button email">Email</button>
              <button className="contact-button call">Call</button>
            </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Cody"></img>
            <h3>Cody Fisher</h3>
            <p>Lead Securiy Associate</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                <button className="contact-button email">Email</button>
                <button className="contact-button call">Call</button>
              </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Esther"></img>
            <h3>Esther Howard</h3>
            <p>Assurance Administrator</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                  <button className="contact-button email">Email</button>
                  <button className="contact-button call">Call</button>
              </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Jenny"></img>
            <h3>Jenny Wilson</h3>
            <p>Chief Accountability Analyst</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                  <button className="contact-button email">Email</button>
                  <button className="contact-button call">Call</button>
              </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Kristin"></img>
            <h3>Kristin Watson</h3>
            <p>Investor Data Orchestrator</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                  <button className="contact-button email">Email</button>
                  <button className="contact-button call">Call</button>
              </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Cameron"></img>
            <h3>Cameron Williamson</h3>
            <p>Product Infrastructur Executive</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                  <button className="contact-button email">Email</button>
                  <button className="contact-button call">Call</button>
              </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Courtney"></img>
            <h3>Courtney Henry</h3>
            <p>Investor Factors Associate</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                  <button className="contact-button email">Email</button>
                  <button className="contact-button call">Call</button>
              </div>
        </div>
        <div class="card">
          <div className="personal-info">
            <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Theresa"></img>
            <h3>Theresa Webb</h3>
            <p>Global Division Officer</p>
            <button className="admin">Admin</button>
            </div>
              <div className="contact">
                  <button className="contact-button email">Email</button>
                  <button className="contact-button call">Call</button>
              </div>
        </div>
    </div>



    <div className="barra-herramientas">
      <div className="search-box">
        <p className="search-bar">Search...</p>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
          <div className="description">
          <h6>Text</h6>
          <p>Add freeform text with basic formatting options.</p>
          </div>
        </div>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg>
          <div className="description">
          <h6>Video</h6>
          <p>Add a video from YouTube, Vimeo or other services.</p>
          </div>
        </div>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
          <div className="description">
          <h6>Page</h6>
          <p>Add a new blank page to your project.</p>
          </div>
        </div>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>
          <div className="description">
          <h6>Calendar</h6>
          <p>Add a full month calendar or a week view calendar.</p>
          </div>
        </div>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"></path></svg>
          <div className="description">
          <h6>Table</h6>
          <p>Add a table for displaying larger sets of data.</p>
          </div>
        </div>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>          
          <div className="description">
          <h6>Code</h6>
          <p>Add raw HTML, JavaScript or CSS.</p>
          </div>
        </div>
        <div className="search-items">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>          
          <div className="description">
          <h6>Image</h6>
          <p>Add a simple image or photo gallery.</p>
          </div>
        </div>

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
      </header>
    </div>
  );
}

export default App;
