// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* container for all the cards */}
      <div className="container">
        {/* container for a card */}
        <div className="card">
          <div className="photo"></div>
          <div className="name">Jane Cooper</div>
          <div className="job-title">Paradigm Representative</div>
          <div className="isAdmin">Admin</div>
          {/* container for the contact details */}
          <div className="contact-details">
          <div className="email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p>Email</p>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name">Cody Fisher</div>
          <div className="job-title"></div>
          <div className="isAdmin">Admin</div>
          <div className="contact-details">
            <p>Email</p>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name"></div>
          <div className="job-title"></div>
          <div className="isAdmin">Admin</div>
          <div className="contact-details">
            <p>Email</p>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name"></div>
          <div className="job-title"></div>
          <div className="isAdmin">Admin</div>
          <div className="contact-details">
            <div className="email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p>Email</p>
            </div>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name"></div>
          <div className="job-title"></div>
          <div className="isAdmin">Admin</div>
          <div className="contact-details">
            <p>Email</p>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name"></div>
          <div className="job-title"></div>
          <div className="isAdmin"></div>
          <div className="contact-details">
            <p>Email</p>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name"></div>
          <div className="job-title"></div>
          <div className="isAdmin"></div>
          <div className="contact-details">
            <p>Email</p>
            <p>Call</p>
          </div>
        </div>
        <div className="card">
          <div className="photo"></div>
          <div className="name"></div>
          <div className="job-title"></div>
          <div className="isAdmin"></div>
          <div className="contact-details">
            <p>Email</p>
            <p>Call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
