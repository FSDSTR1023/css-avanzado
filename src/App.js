import './App.css';

function App() {
  return (
    <>
      <nav className='nav'>
        <img className='logo' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="tailwind logo" />
        <ul className='nav-item'>
          <li className='nav-item-list'><a href="#">
            Product
          </a></li>
          <li className='nav-item-list'><a href="#">
            Features
          </a></li>
          <li className='nav-item-list'><a href="#">
            Marketplace
          </a></li>
          <li className='nav-item-list'><a href="#">
            Company
          </a></li>
          <li className='nav-item-list'><a href="#">
            Log in &rarr;
          </a></li>
        </ul>
      </nav>
    </>
  );
}

export default App;
