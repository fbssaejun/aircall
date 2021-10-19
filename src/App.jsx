import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Footer/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
