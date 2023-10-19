import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav className='nav-wrapper'>
          <img src={logo} className="nav-logo" alt="logo" />
          <ul className='nav-items'>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Users</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
        </nav>
        <main>

          <h1>Cards</h1>

          <div className='card-wrapper'>
            
          <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Jane Cooper</p>
              <p className='card-position'>Paradigm Representative</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Cody Fisher</p>
              <p className='card-position'>Lead Security Associate</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Esther Howard</p>
              <p className='card-position'>Assurance Administrator</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Jenny Wilson</p>
              <p className='card-position'>Chief Accountability Analyst</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Kristin Watson</p>
              <p className='card-position'>Investor Data Orchestrator</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Cameron Williamson</p>
              <p className='card-position'>Product Infrastructure Executive</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Courtney Henry</p>
              <p className='card-position'>Investor Factors Associate</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Theresa Webb</p>
              <p className='card-position'>Global Division Officer</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  ✉️ Email
                </a>
                <a href="/" className='card-button right-button'>
                  📞 Call
                </a>
              </div>
            </div>


          </div>

        </main>
      </header>
    </div>
  );
}

export default App;
