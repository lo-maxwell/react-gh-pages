import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a new website!!
        </p>
        <a
          className="App-link"
          href="private"
          target="_blank"
          rel="noopener noreferrer"
        >
          Signin page
        </a>
      </header>
    </div>
  );
}

export default App;
