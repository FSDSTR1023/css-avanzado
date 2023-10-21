
import './App.css';

function App() {

  return (
  <div>

    <nav className='nav'>
      <img src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='logo'/>
    <ul className='opciones-nav'>
      <li>Product</li>
      <li>Features</li>
      <li>Marketplace</li>
      <li>Company</li>
      <li>Log in</li>
    </ul>
    </nav>

    <div className='cards'>
    <div className='card-group1'>
      <div className='card'>
        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Jane Cooper'/>
        <h5>Jane Cooper</h5>
        <p>Paradigm Representative</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>

      <div className='card'>
        <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Cody Fisher'/>
        <h5>Cody Fisher</h5>
        <p>Lead Security</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>

      <div className='card'>
        <img src='https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Esther Howard'/>
        <h5>Esther Howard</h5>
        <p>Assuance Administradr</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>

      <div className='card'>
        <img src='https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Jenny Wilson'/>
        <h5>Jenny Wilson</h5>
        <p>Chief Accountability Analyst</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>
      </div>

      <div className='card-goup2'>
      <div className='card'>
        <img src='https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Kristin Watson'/>
        <h5>Kristin Watson</h5>
        <p>Investor Data Orchestrator</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>

      <div className='card'>
        <img src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Cameron Williamson'/>
        <h5>Cameron Williamson</h5>
        <p>Product Infraestructure Executive</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>

      <div className='card'>
        <img src='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Courtney Henry'/>
        <h5>Courtney Henry</h5>
        <p>Inversor Factors Associate</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>

      <div className='card'>
        <img src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt='Theresa Webb'/>
        <h5>Theresa Webb</h5>
        <p>Global Diversion Officer</p>
        <p className='admin'>Admin</p>
        <div className='botones'>
        <button>Email</button>
        <button>Call</button>
        </div>
      </div>
      </div>
    </div>

    <div className='reviews-big-container'>
        
      <div className='customer-reviews'>
          <h4>Customer Reviews</h4>
            <div className='total-star'>
              <p className='star'>★★★★☆</p>
              <p>Based on 1624 reviews</p>
            </div>
            
            <div className='star-progress'>
              <p>5</p>
              <p className='star'>★</p>
              <progress max="100" value="63">63%</progress>
              <p>63%</p>
            </div>

            <div className='star-progress'>
              <p>4</p>
              <p className='star'>★</p>
              <progress max="100" value="10">10%</progress>
              <p>10%</p>
            </div>

            <div className='star-progress'>
              <p>3</p>
              <p className='star'>★</p>
              <progress max="100" value="6">6%</progress>
              <p>6%</p>
            </div>

            <div className='star-progress'>
              <p>2</p>
              <p className='star'>★</p>
              <progress max="100" value="12">12%</progress>
              <p>12%</p>
            </div>

            <div className='star-progress'>
              <p>1</p>
              <p className='star'>★</p>
              <progress max="100" value="9">9%</progress>
              <p>9%</p>
            </div>

            <h5>Share your thoughts</h5>
            <p>If you’ve used this product, share your thoughts with other customers</p>
            <button>Write a review</button>
        </div>
        <div className='reviews-container'>
          <div className='reviews'>
            <div className='container-img-name-starts'>
              <img src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' alt='Emily Selman'/>
              <div>
                <h5>Emily Selman</h5>
                <p className='star'>★★★★★</p>
              </div>
              </div>
              <p className='txt-reviews'><em>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</em></p>
          </div>

        <div className='reviews'>
          <div className='container-img-name-starts'>
            <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' alt='Hector Gibbons'/>
            <div>
              <h5>Hector Gibbons</h5>
              <p className='star'>★★★★★</p>
            </div>
          </div>
            <p className='txt-reviews'><em>Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!</em></p>
        </div>

        <div className='reviews'>
          <div className='container-img-name-starts'>
            <img src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='Mark Edwards'/>
            <div>
              <h5>Mark Edwards</h5>
              <p className='star'>★★★★☆</p>
            </div>
            </div>
            <p className='txt-reviews'><em>I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.</em></p>
          </div>
        </div>
    </div>

    <div className='layout'>
      <div className='title-layout'>
        <h3>From the blog</h3>
        <p>Learn how to grow your business with our expert advice.</p>
      </div>

      <div className='post1'>
        <img className='img-post' src='https://www.laescueladelorden.com/wp-content/uploads/2020/06/modulo-2-curso-organizador-profesional.jpg.webp' alt='escritorio'/>
        <div className='etiquetas'>
          <p>Mar 16, 2020</p>
          <p className='tag'>Marketing</p>
        </div>
        <h5 className='post-title'>Boost your conversion rate</h5>
        <p className='post-txt'>Illo sint voluptas. Error coluptales culpa eligendi. Hic vwl totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exerxitationem placeat consectetur </p>
        <div className='author'>
          <img src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='Michael Foster'/>
          <div>
            <h6>Michael foster</h6>
            <p>Co-Fouder /CTO</p>
          </div>
        </div>
        </div>

        <div className='post2'>
        <img className='img-post' src='https://agea.es/wp-content/uploads/teletrabajo-768x432.jpg' alt='escritorio con portatil'/>
        <div className='etiquetas'>
          <p>Mar 10, 2020</p>
          <p className='tag'>Sales</p>
        </div>
        <h5 className='post-title'>Boost your conversion rate</h5>
        <p className='post-txt'>Optio cum necessitatibus solor coluptatum provident commosi et. Qui aperiam fugiat nemo cumque.Optio cum necessitatibus solor coluptatum provident commosi et.</p>
        <div className='author'>
          <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='Lindsay Walton'/>
          <div>
            <h6>Lindsay Walton</h6>
            <p>Front-end Developer</p>
          </div>
        </div>
        </div>

        <div className='post3'>
        <img className='img-post' src='https://i.blogs.es/b0af8a/truco-capturas-mac/650_1200.webp' alt='Pantalla de ordenador'/>
        <div className='etiquetas'>
          <p>Feb 12, 2020</p>
          <p className='tag'>Business</p>
        </div>
        <h5 className='post-title'>Improve your cstomer experience</h5>
        <p className='post-txt'>Cupiditate maiores ullam eveniet adipisci in dloribus nulla minus. Boluptas isto libero adipisci rem et xorporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididnt velit </p>
        <div className='author'>
          <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='Tom Cook'/>
          <div>
            <h6>Tom Cook</h6>
            <p>Director of Product</p>
          </div>
        </div>
        </div>

        
      </div>

      

  </div>
    
  );
}

export default App;
