// Components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";

//styling
import "./App.css";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/productlist/:detailSlug">
          <Detail />
        </Route>
        <Route exact path="/productlist">
          <ProductList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
