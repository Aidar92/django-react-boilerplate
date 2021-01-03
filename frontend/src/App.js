import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css"
import "react-toastify/dist/ReactToastify.css";

import { Root } from "./Root";
import { requeireAuth } from "./utils/RequireAuth";
function App() {
  return (
    <div>
      <ToastContainer hideProgressBar newestOnTop />
      <Root>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={requeireAuth(Dashboard)} />
          <Route exact path="/" component={Home} />
          <Route path="*">Ups</Route>
        </Switch>
      </Root>
    </div>
  );
}

export default App;
