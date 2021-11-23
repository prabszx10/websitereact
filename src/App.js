import './App.scss';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from'./layouts/LoginPage.js';
import LandingPage from './layouts/LandingPage.js';
import MainPage from './layouts/Main.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home"component={LandingPage} />
          <Route path="/main" component={MainPage}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;