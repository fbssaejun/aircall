import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './components/Home.jsx'
import { motion } from 'framer-motion';
import { Route, Switch, BrowserRouter, useLocation, Link } from 'react-router-dom';


const App = () => {
  
  const location = useLocation();
  console.log(location)


  return (
    <div className='container'>
      <Header/>
      <div className="main">
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <motion.div animate={{scale: 1.5}}>
            <Home/>

            </motion.div>
          </Route>
          <Route path="/activity">
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
