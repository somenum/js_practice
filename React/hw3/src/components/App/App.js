import React from "react";
import Itemspage from "../Itemspage";
import Nav from "../Nav";
import Cart from "../Cart";
import Favorite from "../Favorite";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const favorite = useSelector((store) => {
    return store.favorite; //получение данных мвссива favorite из store
  });

  const cart = useSelector((store) => {
    return store.cart; //получение данных массива cart из store
  });

  return (
    <Router>
      <div className="App">
        <div className="main__container">
          <div className="header">
            <Nav />
          </div>
          <div className="cards">
            <Switch>
              <Route exact path="/">
                <Itemspage />
              </Route>

              <Route exact path="/favorite">
                <Favorite
                  addFullStar={true}
                  addEmptyrtStar={false}
                  data={favorite}
                />
              </Route>
              <Route exact path="/cart">
                <Cart data={cart} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
