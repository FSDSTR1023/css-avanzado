import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='nav-container'>
          <ul>
            <li>
              <img
                src={logo}
                className='App-logo'
                alt='logo'
              />
            </li>
          </ul>
          <ul className='nav-items'>
            <li>Product</li>
            <li>Feauters</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
        </nav>
      </header>
      <main className='main-container'>
        <section className='section-container'>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Jame Cooper</strong>
            </h3>
            <p>Paradigm Representative</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Cody Fisher</strong>
            </h3>
            <p>Lead Security Associate</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Esther Howard</strong>
            </h3>
            <p>Assurance Administrator</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt=''
            />
            <h3>
              <strong>Jenny Wilson</strong>
            </h3>
            <p>Chief Accountability Analyst</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Kristin Watson</strong>
            </h3>
            <p>Investor Data Orchestrator</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Cameron Williamson</strong>
            </h3>
            <p>Product Infrastructure Executive</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Courtney Henry</strong>
            </h3>
            <p>Investor Factors Associate</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt='Imagen de perfil'
            />
            <h3>
              <strong>Theresa Webb</strong>
            </h3>
            <p>Global Division Officer</p>
            <button className='btn-admin'>Admin</button>
            <div className='car-btn-container'>
              <button className='btn-email'>Email</button>
              <button className='btn-call'>Call</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
