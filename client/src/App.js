import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from './components/Homepage';
import { Route } from "react-router-dom";
import PatientArea from './components/PatientArea';
import NavMenu from './components/NavMenu';
import DoctorArea from './components/DoctorArea';
import OurServices from './components/OurServices';
import Files from "./components/auth/Files";
import Footer from "./components/Footer";
// import CardPatient from "./components/auth/CardPatient"
import Dashboard_patient  from './components/Dashboard_patient';
import Questionnaire from "./components/Questionnaire";
import MedicalFilll from './components/auth/medicalFile';


function App() {
  
  
 
  return (
    <div className="App">
<NavMenu/>
  <Switch>
         <Route path="/Dashboard_patient" component={ Dashboard_patient} />  
          <Route path="/medicalFile" component={ MedicalFilll} />  
          <Route path="/Questionnaire" component={ Questionnaire} />  
          <Route path="/Files" component={ Files} />  
          <Route exact path="/" component={Homepage} />
          <Route path="/patient"  component={PatientArea} />
          <Route path="/doctors" component={DoctorArea} />
          <Route path="/services" component={OurServices} />
         
         {/* <Route path="/Information" component={Information} /> */}

         <Footer/>
         

  </Switch>
          
      
    </div>
  );
}

export default App;
//<Route path="/login" component={Login} />
//<Route path="/explore" component={Explore} />