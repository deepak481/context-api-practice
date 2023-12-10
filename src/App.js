import logo from './logo.svg';
import './App.css';
import CounterContextProvider from './contexts/counterContext';
import ComponentA from './components/ComponentA';

function App() {
  return (
    <CounterContextProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          Learn React
          <ComponentA />
      </header>
    </div>
    </CounterContextProvider>
  );
}

export default App;
