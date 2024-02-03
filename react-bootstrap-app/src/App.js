import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="hokiefitpic.avif" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is so much more difficult than it needs to be :(
        </p>
        <MyButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


function MyButton() {
  return ( 
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
      <button>
        I am a button!
      </button>
    </a>
  );
}

function onClick() {
  alert("This works!");
}