import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from './components/Homepage';
import { Route } from "react-router-dom";
import PatientArea from './components/PatientArea';
// import NavMenu from './components/NavMenu';
import DoctorArea from './components/DoctorArea';
import OurServices from './components/OurServices';
import Information from "./components/auth/Information"
import Footer from "./components/Footer";
// import CardPatient from "./components/auth/CardPatient"

import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from './js/actions/authActions';

function App() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  
  
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  
  
  
  const authLinks = (
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
          {/* <li><a >Are you patient?</a></li> */}
          </Link>
          <li><a href="" onClick={logoutUser}>Logout</a></li>
          <Link to="/doctors">
          <li><a>Are you doctor?</a></li>
          </Link>
          <Link to="/Information">
          <li><a>Informations</a></li>
          </Link>
        </ul>
      </div>
    </nav>
    </div>
    </fragment>
  )
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
          <Link to="/Information">
          <li><a>Informations</a></li>
          </Link>
        </ul>
      </div>
    </nav>
    </div>
    </fragment>
  );
  

  return (
    <div className="App">
  
  <Switch>
  {isAuth ? authLinks : guestLinks}
  
         <Route exact path="/" component={Homepage} />
         <Route path="/patient"  component={PatientArea} />
         <Route path="/doctors" component={DoctorArea} />
         <Route path="/services" component={OurServices} />
         <Route path="/Information" component={Information} />

         <Footer/>
         

  </Switch>
          
      
    </div>
  );
}

export default App;
//<Route path="/login" component={Login} />
//<Route path="/explore" component={Explore} />