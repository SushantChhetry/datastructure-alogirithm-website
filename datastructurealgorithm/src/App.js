import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        
        <div id="page-body">
          <Routes/>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
