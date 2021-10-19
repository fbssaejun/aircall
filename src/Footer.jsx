import React from 'react';
import './css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <footer>
      <Link to="/activity"><i className="fas fa-phone"></i></Link>
      <Link><i className="far fa-user"></i></Link>
      <Link className="number-pad"><i className="fas fa-grip-vertical"></i></Link>
      <Link><i className="fas fa-cog"></i></Link>
      <Link><i className="far fa-circle"></i></Link>
    </footer>
  );
}