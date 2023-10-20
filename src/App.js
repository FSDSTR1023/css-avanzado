import burns from './images/burns.jpeg';
import smithers2 from './images/smithers2.jpeg';
import homer from './images/homer.png';
import ned from './images/ned.png';
import skinner from './images/skinner.jpeg';
import ralph from './images/ralph.png';
import milhouse from './images/milhouse.png';
import marge2 from './images/marge2.png';

import './App.css';

function App() {
  return (
   <> <header>
    <h1>Ejercicio tarjetas</h1>
</header>
<section>
    <div className="container">
        <h2>Contact cards</h2>
    <div className="card-wrapper">
        <div className="card">
            <img src={burns} />
            <h2>Montgomery Burns</h2>
            <p>CEO</p>                   
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={smithers2} />
            <h2>Waylon Smithers</h2>
            <p>CEO Assistant</p>
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={homer} />
            <h2>Homer Simpson</h2>
            <p>Product Owner</p>
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={ned} />
            <h2>Ned Flanders</h2>
            <p>Graphic Designer</p>
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={skinner} />
            <h2>Seymour Skinner</h2>
            <p>Lead Developer</p>
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={ralph} />
            <h2>Ralph Wiggum</h2>
            <p>QA Engineer</p>
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={milhouse} />
            <h2>Milhouse</h2>
            <p>Full Stack Developer</p>
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
        <div className="card">
            <img src={marge2} />
            <h2>Marge Bouvier</h2>
            <p>Office Management</p>                    
            <div className="cont-button">
                <button>Email</button>
                <button>Call</button>                          
            </div>
        </div>
    </div>
    </div>
</section>
</>
  );
}

export default App;
