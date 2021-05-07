import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthenticationPage from "./pages/authentication/authentication.component";

import {Route, Switch} from "react-router";

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/shop'} component={ShopPage} />
            <Route path={'/signin'} component={AuthenticationPage} />
        </Switch>
    </div>
  );
}

export default App;
