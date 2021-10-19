import React from 'react';
import './css/footer.css';

export default function Footer () {
  return (
    <footer>
      <button><i className="fas fa-phone"></i></button>
      <button><i className="far fa-user"></i></button>
      <button className="number-pad"><i className="fas fa-grip-vertical"></i></button>
      <button><i className="fas fa-cog"></i></button>
      <button><i className="far fa-circle"></i></button>
    </footer>
  );
}