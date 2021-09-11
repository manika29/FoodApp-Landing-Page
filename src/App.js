// import { Fragment } from "react";
// import Meals from "./components/Meals/Meals";
import Home from "./components/Layout/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
