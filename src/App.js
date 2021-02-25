import Login from './Component/Login';
import Main from './Component/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App(match) {
  return (
    <div className="custom-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

function NotFound() {
  return <h1>Not Found</h1>;
}

export default App;
