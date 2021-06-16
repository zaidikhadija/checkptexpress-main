import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from './components/Homepage';
import { Route } from "react-router-dom";
import PatientArea from './components/PatientArea';
import NavMenu from './components/NavMenu';
import DoctorArea from './components/DoctorArea';
import OurServices from './components/OurServices';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
  
  <Switch>
  <NavMenu/>
  
         <Route exact path="/" component={Homepage} />
         <Route path="/patient" component={PatientArea} />
         <Route path="/doctors" component={DoctorArea} />
         <Route path="/services" component={OurServices} />
         <Footer/>

  </Switch>
          
      
    </div>
  );
}

export default App;
//<Route path="/login" component={Login} />
//<Route path="/explore" component={Explore} />