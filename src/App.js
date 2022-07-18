import logo from './logo.svg';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className="name">App</div>
     <Home name="Pranjal Verma" course="ReactJs" timeline={3}/>
     <Counter/>
    </div>
  );
}

export default App;
