import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './components/Home.jsx'
import { Route, Switch, BrowserRouter, useLocation } from 'react-router-dom';


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="main">
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);

export default App;
