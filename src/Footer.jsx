import React from "react";
import "./css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {


  return (
    <footer>
      <Link to="/activity"><i className="fas fa-phone"></i></Link>
      <Link to="#"><i className="far fa-user"></i></Link>
      <Link to="#" className="number-pad"><i className="fas fa-grip-vertical"></i></Link>
      <Link to="#"><i className="fas fa-cog"></i></Link>
      <Link to="#"><i className="far fa-circle"></i></Link>
    </footer>
  );
}
