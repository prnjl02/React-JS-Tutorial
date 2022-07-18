import logo from './logo.svg';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Home name="Pranjal Verma" course="ReactJs" timeline={3}/>
    </div>
  );
}

export default App;
