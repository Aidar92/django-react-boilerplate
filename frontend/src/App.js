import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import "bootstrap/dist/css/bootstrap.css"
import { Root } from "./Root";
function App() {
  return (
    <div>
      <Root>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route path="*">Ups</Route>
        </Switch>
      </Root>
    </div>
  );
}

export default App;
