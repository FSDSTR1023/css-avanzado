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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
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
              <button className='btn-email'>✉️ Email</button>
              <button className='btn-call'>📞 Call</button>
            </div>
          </div>
        </section>
        <section className='search-main-container'>
          <div className='list-container'>
            <div className='search-input'>
              <svg
                className='search-svg'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                stroke-width='1.25'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <input
                className='search'
                type='text'
                id='search'
                placeholder='Search...'
              />
            </div>
            <p className='paragrph'>
              <div className='items-li-container'>
                <ul>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(88, 88, 194)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='liblue-li-svg'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Text</p>
                      <p>Add a video from YouTube, Vimeo or other services.</p>
                    </div>
                  </li>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(75, 75, 223)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='blue-li-svg'>
                        <path
                          stroke-linecap='round'
                          d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Video</p>
                      <p>Add a video from YouTube, Vimeo or other services.</p>
                    </div>
                  </li>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(146, 42, 225)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='page-li-svg'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Page</p>
                      <p>Add a new clanck page to your proyect.</p>
                    </div>
                  </li>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(54, 225, 134)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='aqgreen-li-svg'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Table</p>
                      <p>Add a table for displaying larger set of data.</p>
                    </div>
                  </li>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(11, 222, 222)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='aqua-li-svg'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Code</p>
                      <p>Add raw HTML, JavaScript or CSS code.</p>
                    </div>
                  </li>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(152, 57, 224)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='purple-li-svg'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Calendar</p>
                      <p>Add a full month calendar or a week view calendar.</p>
                    </div>
                  </li>
                  <li className='li-container'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='rgb(224, 57, 57)'
                        viewBox='0 0 24 24'
                        stroke-width='1'
                        stroke='white'
                        aria-hidden='true'
                        className='red-li-svg'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                        />
                      </svg>
                    </div>
                    <div className='text-li-container'>
                      <p>Image</p>
                      <p>Add a simple image or a photo gallery.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
