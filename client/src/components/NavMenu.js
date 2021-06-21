
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
// import { logout } from '../js/actions/authActions';



// const NavMenu = () =>{
// const isAuth = useSelector((state) => state.authReducer.isAuth);
// const user = useSelector((state) => state.authReducer.user);

// const dispatch = useDispatch();
// const logoutUser = () => {
//   dispatch(logout());
// };



// const authLinks = (
//   <fragment>
// <div classNameName="home">
//     <nav className="nav">
//     <div className="container">
//       <h1 className="logo"><a href="/">Covid-Care.tn</a></h1>
//       <ul>
//       <Link to="/">
//         <li><a className="current">About us</a></li>
//         </Link>
//         <li><a href="/services">Ours Services</a></li>
//         <Link to="/patient">
//         <li><a >Are you patient?</a></li>
//         </Link>
//         <li><a href="#" onClick={logoutUser}>Logout</a></li>
//         <Link to="/doctors">
//         <li><a>Are you doctor?</a></li>
//         </Link>
//       </ul>
//     </div>
//   </nav>
//   </div>
//   </fragment>
// )
// const guestLinks = (
//   <fragment>
// <div classNameName="home">
//     <nav className="nav">
//     <div className="container">
//       <h1 className="logo"><a href="/">Covid-Care.tn</a></h1>
//       <ul>
//       <Link to="/">
//         <li><a className="current">About us</a></li>
//         </Link>
//         <li><a href="/services">Ours Services</a></li>
//         <Link to="/patient">
//         <li><a >Are you patient?</a></li>
//         </Link>
//         <Link to="/doctors">
//         <li><a>Are you doctor?</a></li>
//         </Link>
//       </ul>
//     </div>
//   </nav>
//   </div>
//   </fragment>
// );

const NavMenu = () =>{

    return(
      
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
      </ul>
    </div>
    
  </nav>
  
  </div>
  
  
    )};

    export default NavMenu

