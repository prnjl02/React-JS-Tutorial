import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import FetchData from './Hooks/FetchData';

export const userContext = React.createContext();
export const crseContext = React.createContext();
function App() {
  return (
    // <>
    //   <Navbar />
    //   <div className="App container mt-5">
    //     <Home name="Pranjal Verma" course="ReactJs" timeline={2} />
    //     <Counter />
    //   </div>
    // </>

    <Router>
      <Navbar />
      <userContext.Provider value={'Pranjal'}>
        <crseContext.Provider value={'react'}>
          <FetchData />
        </crseContext.Provider>

      </userContext.Provider>
      <Routes>
        <Route path="/counter" element={<Counter />}>
        </Route>
        <Route path="/home" element={<Home name="Pranjal Verma" course="ReactJs" timeline={2} />}>

        </Route>
        {/* <Route path="/" element = { <Home name="Pranjal Verma" course="ReactJs" timeline={2} />}> */}
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
