import logo from './logo.svg';
import './App.css';
import LifecycleComponent from './LifecycleComponent';
import LifecycleComponentFunc from './LifecycleCompontFunc';
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <LifecycleComponent></LifecycleComponent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save!!!!! to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <LifecycleComponentFunc></LifecycleComponentFunc>
      </header>
    </div>
  );
}

export default App;
