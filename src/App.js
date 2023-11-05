import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <h1>From the blog</h1>
        <h3 className="textogris">Learn how to grow your business with our expert advice.</h3>
        <div className="grids">
          <div className="columna">
            <img className="imgcolumna" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80" alt=""></img>
            <div className="textobajoimagen">
              <span className="fecha">Mar 16, 2020</span>
              <a href="#" className="link">Marketing</a>
            </div>
            <div className="textoprincipal">
              <h3><a href="#">Boot your conversion rate</a></h3>
              <p className="textogris">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            <div className="autor">
              <img className="autorimg" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""></img>
              <div className="autornombre">
                <span>Michael Foster</span>
                <span className="textogris">Co-Founder / CTO</span>
              </div>
            </div>
          </div>
          <div className="columna">
            <img className="imgcolumna" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" alt=""></img>
            <div className="textobajoimagen">
              <span className="fecha">Mar 10, 2020</span>
              <a href="#" className="link">Sales</a>
            </div>
            <div className="textoprincipal">
              <h3><a href="#">How to use search engine optimization to drive sales</a></h3>
              <p className="textogris">Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
            </div>
            <div className="autor">
              <img className="autorimg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
              <div className="autornombre">
                <span>Lindsay Walton</span>
                <span className="textogris">Front-End Developer</span>
              </div>
            </div>
          </div>
          <div className="columna">
            <img className="imgcolumna" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" alt=""></img>
            <div className="textobajoimagen">
              <span className="fecha">Feb 12, 2020</span>
              <a href="#" className="link">Business</a>
            </div>
            <div className="textoprincipal">
              <h3><a href="#">Improve your customer experience</a></h3>
              <p className="textogris">Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.</p>
            </div>
            <div className="autor">
              <img className="autorimg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
              <div className="autornombre">
                <span>Tom Cook</span>
                <span className="textogris">Director of Product</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <div className="partesuperior">
          <div className="textosuperior">
            <span>Users</span>
            <span className="textogris">A list of all the users in your account including their name, title, email and role.</span>
          </div>
            <button className="btn-users">Add user</button>
        </div>
        <div className="tablaentera">
            <table className="tabla">
              <tr className="encabezados">
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
              </tr>
            <tbody>
              <tr>
                <td>Lindsay Walton</td>
                <td className="textogris">Front-end Developer</td>
                <td className="textogris">lindsay.walton@example.com</td>
                <td className="textogris">Member</td>
                <td><a href="#" className="botoneditar">Edit</a></td>
              </tr>
              <tr>
                <td>Courtney Henry</td>
                <td className="textogris">Designer</td>
                <td className="textogris">courtney.henry@example.com</td>
                <td className="textogris">Admin</td>
                <td><a href="#" className="botoneditar">Edit</a></td>
              </tr>
              <tr>
                <td>Tom Cook</td>
                <td className="textogris">Director of Product</td>
                <td className="textogris">tom.cook@example.com</td>
                <td className="textogris">Member</td>
                <td><a href="#" className="botoneditar">Edit</a></td>
              </tr>
              <tr>
                <td>Whitney Francis</td>
                <td className="textogris">Copywriter</td>
                <td className="textogris">whitney.francis@example.com</td>
                <td className="textogris">Admin</td>
                <td><a href="#" className="botoneditar">Edit</a></td>
              </tr>
              <tr>
                <td>Leonard Krasner</td>
                <td className="textogris">Senior Designer</td>
                <td className="textogris">leonard.krasner@example.com</td>
                <td className="textogris">Owner</td>
                <td><a href="#" className="botoneditar">Edit</a></td>
              </tr>
              <tr>
                <td>Floyd Miles</td>
                <td className="textogris">Principal Designer</td>
                <td className="textogris">floyd.miles@example.com</td>
                <td className="textogris">Member</td>
                <td><a href="#" className="botoneditar">Edit</a></td>
              </tr>
            </tbody>
            </table>
        </div>
      </footer>
    </div>
  );
}

export default App;
