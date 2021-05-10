import "./App.css";
import Headers from "./Headers";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Payment from "./Payment";
function App() {
  return (
    <Router>
      <Headers></Headers>
      <Switch>
        <PrivateRoute path="/checkout">
          <Checkout></Checkout>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/payment">
          <Payment></Payment>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
