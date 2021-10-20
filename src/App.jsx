import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './components/Home.jsx';
import Archive from './components/Archive.jsx';
import Activity from './components/Activity.jsx';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Switch, HashRouter, useLocation, Link } from 'react-router-dom';
import {  swipeDownTransition, extendTransition, swipeUpTransition } from './helpers/Transitions.jsx';


const App = () => {
  
  const location = useLocation();

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
    .then((res) => {
      setCalls(res.data)
    })
  }, [])

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
              <Activity calls={calls}/>
            </motion.div>
          </Route>
          <Route path="/archive">
            <motion.div initial="i" animate="a" exit="e" variants={swipeUpTransition} transition={extendTransition}>
              <Archive calls={calls}/>
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
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('app')
);

export default App;
