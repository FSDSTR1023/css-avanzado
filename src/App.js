import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

function App() {

  return (  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Movies />
      </header>
    </div>
  );
}

export default App;
