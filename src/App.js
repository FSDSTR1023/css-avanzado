import logo from './logo.svg';

import userImage from './user.png';

import lapiz from './lapiz.png';
import video from './video.png';
import pagina from './pagina.png';
import calendario from './calendario.png';
import tabla from './tabla.png';
import code from './code.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Ejercicio 1 */}
        <h2>Ejercicio 1</h2>
        <nav class="nav-wrapper">
          <div id="contenedor-logo-ej1">
            <img src={logo} class="App-logo" id="logo-ej1" alt="logo" />
          </div>
          <ul id="lista-ej1">
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Company</li>
            <li>Log in →</li>
          </ul>
        </nav>
        <img src={logo} class="App-logo" alt="logo" />
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


      {/* Ejercicio 2 */}
      <section>
        <h2>Ejercicio 2</h2>
        <div class="tarjetas-ej2">
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 1</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 2</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 3</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 4</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 5</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 6</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 7</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
          <div class="tarjeta-ej2">
            <div>
              <img src={userImage} class="user-image" alt="user" />
              <p>User 8</p>
              <p>Cargo</p>
            </div>
            <div class="userLinks">
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Email</a></p>
              <p><a href="https://tailwindui.com/components/application-ui/lists/grid-lists">Call</a></p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Ejercicio 3 */}
      <section id="ejercicio3">
        <h2 id="tituloEjercicio3">Ejercicio 3</h2>
        <div id="toolBar">
          <div class="tool">
            <img src={lapiz} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Text</p>
              <p class="toolDescription">Add freeform text with basic formating options.</p>
            </div>
          </div>
          <div class="tool">
            <img src={video} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Video</p>
              <p class="toolDescription">Add a video from Youtube, Vimeo or other services.</p>
            </div>
          </div>
          <div class="tool">
            <img src={pagina} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Page</p>
              <p class="toolDescription">Add a new blank page to your project.</p>
            </div>
          </div>
          <div class="tool">
            <img src={calendario} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Calendar</p>
              <p class="toolDescription">Add a full month calendar or a week view calendar.</p>
            </div>
          </div>
          <div class="tool">
            <img src={tabla} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Table</p>
              <p class="toolDescription">Add a table for displaying larger sets of data.</p>
            </div>
          </div>
          <div class="tool">
            <img src={code} class="toolIcon" alt="toolIcon" />
            <div class="toolText">
              <p class="toolName">Code</p>
              <p class="toolDescription">Add raw HTML, JavaScript or CSS code.</p>
            </div>
          </div>
        </div>
      </section>


      
      {/* Ejercicio 4 */}
      <section id="ejercicio4">
        <h2>Ejercicio 4</h2>
        <div id="allReviews">
          <div id="reviewsSummary">
            <h3>Customers Reviews</h3>
            <p>⭐⭐⭐⭐⭐ Based on 1624 reviews</p>
            <div id="reviewsEstadisticas">
              <div class="reviewValuePercentage">
                <label for="percentage5">5 ⭐ </label>
                <progress max="100" value="63" id="percentage5" class="percentage"></progress>
                <label for="percentage5"> 63%</label>
              </div>
              <div class="reviewValuePercentage">
                <label for="percentage4">4 ⭐</label>
                <progress max="100" value="10" id="percentage4" class="percentage"></progress>
                <label for="percentage4">10%</label>
              </div>
              <div class="reviewValuePercentage">
                <label for="percentage3">3 ⭐ </label>
                <progress max="100" value="6" id="percentage3" class="percentage"></progress>
                <label for="percentage3">6%</label>
              </div>
              <div class="reviewValuePercentage">
                <label for="percentage2">2 ⭐ </label>
                <progress max="100" value="12" id="percentage2" class="percentage"></progress>
                <label for="percentage2">12%</label>
              </div>
              <div class="reviewValuePercentage">
                <label for="percentage1">1 ⭐ </label>
                <progress max="100" value="9" id="percentage1" class="percentage"></progress>
                <label for="percentage1">9%</label>
              </div>
            </div>
            <h4>Share your thoughts</h4>
            <p id="shareThoughts">If you've used this product, share your thoughts with other customers</p>
            <input type="button" id="writeAReview" value="Write a review"></input>
          </div>
          <div class="userReviews">
            <div class="userReview">
              <div class="userProfile">
                <img src={userImage} class="userIcon" alt="userIcon" />
                <div class="userInfo">
                  <p class="userName"><strong>Emily Selman</strong></p>
                  <p class="userScore">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p class="reviewDescription">This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
            </div>
            <div class="userReview">
              <div class="userProfile">
                <img src={userImage} class="userIcon" alt="userIcon" />
                <div class="userInfo">
                  <p class="userName"><strong>Hector Gibbons</strong></p>
                  <p class="userScore">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p class="reviewDescription">Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!</p>
            </div>
            <div class="userReview">
              <div class="userProfile">
                <img src={userImage} class="userIcon" alt="userIcon" />
                <div class="userInfo">
                  <p class="userName"><strong>Mark Edwards</strong></p>
                  <p class="userScore">⭐⭐⭐⭐</p>
                </div>
              </div>
              <p class="reviewDescription">I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
