import React, {useEffect} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthenticationPage from "./pages/authentication/authentication.component";
import ContactPage from "./pages/contact/contact.component";

import {Redirect, Route, Switch} from "react-router";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import CheckoutPage from "./pages/checkout/checkout.component";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route path={'/shop'} component={ShopPage} />
                <Route path={'/checkout'} component={CheckoutPage} />
                <Route path={'/contact'} component={ContactPage} />
                <Route exact path={'/signin'} render={() => currentUser ? (<Redirect to={'/'} />) : <AuthenticationPage/>} />
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
