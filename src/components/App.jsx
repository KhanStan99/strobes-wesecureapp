import './styles/App.css';
import Login from './Login';
import Registration from './Registration';
import LoginSSO from './LoginSSO';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'carbon-components/css/carbon-components.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login-sso">
          <LoginSSO />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
