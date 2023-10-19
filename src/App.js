import logo from './logo.svg';
import './App.css';
import { ArrowIcon, MailIcon, PhoneIcon } from './Icons';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <ul className='nav-items'>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
          </ul>
          <button className='action-btn'>Log in <ArrowIcon /></button>
        </nav>
      </header>
      <section className='contact-cards-wrapper'>
        <article className='contact-card'>
          <div className='contact-info-wrapper'>
            <img src='https://unavatar.io/midudev' alt="johnn doe"></img>
            <div className='contact-info'>
              <strong>Jane Doe</strong>
              <p>Paradigms</p>
              <span className='contact-pill'>Admin</span>
            </div>

          </div>
          <div className='contact-btn'>
            <button><MailIcon />Email</button>
            <button><PhoneIcon />Phone</button>
          </div>
        </article>
        <article className='contact-card'>
          <div className='contact-info-wrapper'>
            <img src='https://unavatar.io/midudev' alt="johnn doe"></img>
            <div className='contact-info'>
              <strong>Jane Doe</strong>
              <p>Paradigms</p>
              <span className='contact-pill'>Admin</span>
            </div>

          </div>
          <div className='contact-btn'>
            <button><MailIcon />Email</button>
            <button><PhoneIcon />Phone</button>
          </div>
        </article>
        <article className='contact-card'>
          <div className='contact-info-wrapper'>
            <img src='https://unavatar.io/midudev' alt="johnn doe"></img>
            <div className='contact-info'>
              <strong>Jane Doe</strong>
              <p>Paradigms</p>
              <span className='contact-pill'>Admin</span>
            </div>

          </div>
          <div className='contact-btn'>
            <button><MailIcon />Email</button>
            <button><PhoneIcon />Phone</button>
          </div>
        </article>
        <article className='contact-card'>
          <div className='contact-info-wrapper'>
            <img src='https://unavatar.io/midudev' alt="johnn doe"></img>
            <div className='contact-info'>
              <strong>Jane Doe</strong>
              <p>Paradigms</p>
              <span className='contact-pill'>Admin</span>
            </div>

          </div>
          <div className='contact-btn'>
            <button><MailIcon />Email</button>
            <button><PhoneIcon />Phone</button>
          </div>
        </article>
        <article className='contact-card'>
          <div className='contact-info-wrapper'>
            <img src='https://unavatar.io/midudev' alt="johnn doe"></img>
            <div className='contact-info'>
              <strong>Jane Doe</strong>
              <p>Paradigms</p>
              <span className='contact-pill'>Admin</span>
            </div>

          </div>
          <div className='contact-btn'>
            <button><MailIcon />Email</button>
            <button><PhoneIcon />Phone</button>
          </div>
        </article>
        <article className='contact-card'>
          <div className='contact-info-wrapper'>
            <img src='https://unavatar.io/midudev' alt="johnn doe"></img>
            <div className='contact-info'>
              <strong>Jane Doe</strong>
              <p>Paradigms Paradigms Paradigms Paradigms Paradigms</p>
              <span className='contact-pill'>Admin</span>
            </div>

          </div>
          <div className='contact-btn'>
            <button><MailIcon />Email</button>
            <button><PhoneIcon />Phone</button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
