import logo from './logo.svg';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App container mt-5">
      {/* <div className="name">App</div> */}
     <Home name="Pranjal Verma" course="ReactJs" timeline={4}/>
     <Counter/>
    </div>
  );
}

export default App;
