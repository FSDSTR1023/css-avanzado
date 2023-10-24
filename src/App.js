import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Container">
          <lu className="Bs">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Articulos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </lu>
        </div>
        <div className='Ca'>
          <h1>Bienvenidos a <span> 
            Atomet</span></h1>
          <p></p>
        </div>
        

        <div id='Nosotros'>
          <div className='Cr'>
            <div className='Rw'>
              <div className='S1'>
                <img src='https://images.pexels.com/photos/7550298/pexels-photo-7550298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
              </div>
              <div className='S2'>
               <h1 className='Ss'>Nosotros</h1>
               <p className='To'>Hace unos años, tres apasionados por la tecnología, Alex, Tomas y Melanie,
                fundaron Atomet con la visión de revolucionar el desarrollo web. 
                Comenzaron en una pequeña oficina, superando desafíos iniciales. Su enfoque en calidad, innovación y colaboración los llevó al éxito.
                La empresa se diversificó en desarrollo de aplicaciones móviles y creció, manteniendo su compromiso con la responsabilidad social.
                Hoy, Atomet es una empresa líder en desarrollo web, sinónimo de innovación y calidad.</p>
                </div>
       </div>
       </div>
        <div id='Articulos'>
          <div className='Articulo-1'>
            <a href='https://www.humanlevel.com/blog/desarrollo-web/lets-encrypt-certificados-ssl-libres-y-gratis-para-tu-web-con-https.html' target='_blank'
            title='1,2,3 pollito ingles'>Lets Encrypt, certificados SSL libres y gratis para tu web con HTTPS
            <img src='https://blog.eevidence.com/wp-content/uploads/2017/04/Email-Encriptado-Cifrado-Certificado-Firma-electr%C3%B3nica.jpg'></img>
            </a>
          </div>
          <div className='Articulo-2'></div>
          <div className='Articulo-3'></div>
          <div className='Articulo-4'></div>
        </div>



        <div id='Servicios'>

        </div>
      








       <div id='Contacto'>
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </header></div>
  );
}

export default App;
