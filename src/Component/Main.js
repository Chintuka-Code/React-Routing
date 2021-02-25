import React, { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, useRouteMatch } from 'react-router-dom';
import Loading from './Loading';

// Without lazy loading
// import Body from './Body';
// import About from './about';
// import Term from './Term';
// import Dynamic from './Dynamic';
// import Basic from '../ClassComponent/Basic';
// import BasicState from '../State/BasicState';
// import NotFound from './NotFound';

// Lazy loading
const Body = React.lazy(() => import('./Body'));
const About = React.lazy(() => import('./about'));
const Term = React.lazy(() => import('./Term'));
const Dynamic = React.lazy(() => import('./Dynamic'));
const Basic = React.lazy(() => import('../ClassComponent/Basic'));
const BasicState = React.lazy(() => import('../State/BasicState'));
const LifeCycle = React.lazy(() => import('../LifeCyle/BasicLife'));
const BasicEvent = React.lazy(() => import('../EventHandling/BasicForm'));
const NotFound = React.lazy(() => import('./NotFound'));

const Main = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Header />
      <div className="main-container">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Body exact path={path} />
            <About path={`${path}/about`} />
            <Term path={`${path}/term`} />
            <Dynamic path={`${path}/dynamic/:name`} />
            <Basic path={`${path}/basic`} />
            <BasicState path={`${path}/basicstate`} />
            <LifeCycle path={`${path}/basiclife`} />
            <BasicEvent path={`${path}/basicevent`} />
            <NotFound />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
