import logo from './logo.svg';
import tera from './Tera.jpg';
import './App.css';
import { Route } from 'react-router-dom';
import Viva from './Viva.js';
import Tera from './Tera.js';

function App() {
  return (
    <div className="App">
      {/* <Route path="/tera" exact={true} component={Tera} > */}
      <div className="App-header1">
        <img src={tera} className="App-logo" alt="logo1" />
        <p>
          테라리움
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
      {/* </Route>
      <Route path="/viva" exact={true} component={Viva} > */}
      <div className="App-header2">
        <img src={logo} className="App-logo" alt="logo2" />
        <p>
          비바리움
        </p>
      </div>
      {/* </Route> */}
    </div>
  );
}

export default App;

