import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './components/Home.jsx';
import Activity from './components/Activity.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Switch, BrowserRouter, useLocation, Link } from 'react-router-dom';


const App = () => {
  
  const location = useLocation();

  const swipeDownTransition = {
    i:{
      opacity: 0,
      y: "-100%"
    },
    a:{
      opacity: 1,
      y:"0"
    },
    e:{
      opacity: 0,
      y: "100%"
    },
  };

  const extendTransition = {
    duration: 0.5
  };


  return (
    <div className='container'>
      <Header/>
      <AnimatePresence exitBeforeEnter initial={false}>
      <div className="main">
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <motion.div animate={{scale: 1.5}}>
            <Home/>
            </motion.div>
          </Route>
          <Route path="/activity">
            <motion.div initial="i" animate="a" exit="e" variants={swipeDownTransition} transition={extendTransition}>
              <Activity/>
            </motion.div>
          </Route>
        </Switch>
      </div>
      </AnimatePresence>
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
