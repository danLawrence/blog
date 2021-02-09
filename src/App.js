import logo from './logo.svg';
import './App.css';
import Algorithm from './algorithms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Algorithm />
      </header>
    </div>
  );
}

export default App;
