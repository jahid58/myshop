import "./App.css";
import Headers from "./Headers";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
  return (
    <Router>
      <Headers></Headers>
      <Switch>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
