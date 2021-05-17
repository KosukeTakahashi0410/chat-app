import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Top from './pages/Top'
import Signup from './pages/Signup'
import Success from './pages/Success'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Error from './pages/Error'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/user" component={User} />
          <Route exact path="/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
