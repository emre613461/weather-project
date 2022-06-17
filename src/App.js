
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
        <Card />
      </WeatherProvider>


    </div>
  );
}

export default App;
