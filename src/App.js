import './App.scss';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meteo App</h1>
      </header>
      <Form />
      <Cards />
    </div>
  );
}

export default App;
