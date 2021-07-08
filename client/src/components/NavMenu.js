
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../js/actions/authActions';
import "./Nav.css";



const NavMenu = () =>{
const isAuth = useSelector((state) => state.authReducer.isAuth);
// const user = useSelector((state) => state.authReducer.user);

const dispatch = useDispatch();
const logoutUser = () => {
  dispatch(logout());
};



const authLinks = (
    
  <div classNameName="home">
      <nav className="nav">
      <div className="container">
       <div style={{display:"flex-end"}}> </div>
           <Link to="/Questionnaire" >
          <li><a   href="/Questionnaire"  onClick={logoutUser}>Logout/Go Back  </a></li></Link> 
          <Link to="/Files">
          <li><a href="/Files"> </a></li></Link>
          <Link to="/medicalFile" ><li><a href="/medicalFile"> </a></li> </Link>
          <Link to="/Dashboard_patient">
          <li><a href="/Dashboard_patient"> </a></li></Link>
          {/* <Link to="/medicalFile" ><li><a href="/medicaleFile"> </a></li> </Link> */} 
         
          </div>
    </nav>
    </div>)

  const guestLinks = (
    <fragment>
  <div classNameName="home">
      <nav className="nav">
      <div className="container">
        <h1 className="logo"><a href="/">Covid-Care.tn</a></h1>
        <ul>
        <Link to="/">
          <li><a className="current">About us</a></li>
          </Link>
          <li><a href="/services">Ours Services</a></li>
          <Link to="/patient">
          <li><a >Are you patient?</a></li>
          </Link>
          <Link to="/doctors">
          <li><a>Are you doctor?</a></li>
          </Link>
          {/* <Link to="/Information">
          <li><a>Informations</a></li>
          </Link> */}
        </ul>
      </div>
    </nav>
    </div>
    </fragment>
  );
  

    return(
    
      
<div classNameName="home">
    <nav className="nav">
   
    <div className="container">
    
      {/* <h1 className="logo"><a href="/">Covid-Care.tn</a></h1>
      
      <ul>
     
      <Link to="/">
        <li><a className="current">About us</a></li>
        </Link>
        <li><a href="/services">Ours Services</a></li>
        <Link to="/patient">
        <li><a >Are you patient?</a></li>
        </Link>
        <Link to="/doctors">
        <li><a>Are you doctor?</a></li>
        </Link>
      </ul>
    </div> */}
      {isAuth ? authLinks : guestLinks}
      </div>
   
  </nav>
  
  </div>
  
  
    )};

    export default NavMenu

