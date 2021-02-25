import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  match,
} from 'react-router-dom';
import Body from './Body';
import About from './about';
import Term from './Term';
import Dynamic from './Dynamic';
import NotFound from './NotFound';

const Main = () => {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <div>
      <Header />
      <div className="main-container">
        <Switch>
          <Route exact path={path} component={Body} />
          <Route path={`${path}/about`} component={About} />
          <Route path={`${path}/term`} component={Term} />
          <Route path={`${path}/dynamic/:name`} component={Dynamic} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
