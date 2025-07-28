import { Link } from "react-router-dom";
import "./Navbar.css";
import {useState } from "react";
export default function Navbar() {
   const[isScroll, setisScroll] = useState(false)
   window.addEventListener('scroll' , function(){
    if(scrollY>0){
      setisScroll(true)
    }else{
      setisScroll(false)
    }
   })
  return (
    <>
<nav className={`navbar navbar-expand-lg transition fixed-top  bg-body-tertiary ${isScroll? "" : 'py-4' } `}>
  <div className="container-fluid">
    <Link to={""} className="fs-2 text-dark fw-bolder">Start React with Eng.Mohamed</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto justify-content-around ">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/Portfoli">Portfoli</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
