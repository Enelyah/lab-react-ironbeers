import React, {Component, Fragment} from 'react';
import './App.css';
import Homepage from './Homepage';
import AllBeers from './AllBeers';
import OneBeer from './OneBeer';
import NewBeer from './NewBeer';
import Nav from './Nav';
import {Switch, Route, withRouter} from 'react-router-dom'



function App(props) {
  const isOnHome = props.location.pathname === '/';
  const renderNav = !isOnHome && <Nav />;
  return (
    <Fragment>
      {renderNav}
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/beers" component={AllBeers}/>
        <Route exact path="/random-beer" component={OneBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>
    </Fragment>
  );
}





export default withRouter(App);
