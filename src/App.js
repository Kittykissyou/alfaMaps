import Context from './components/Context';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <Context>
      <div className="App">
        <div className="wrapper">
          <Main />
        </div>
      </div>
    </Context>
  );
}

export default App;
