import React from 'react';
import './PatientArea.css';
import {
  Card, CardImg,  CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
import RegisterModalPatient from './auth/RegistreModalPatient';
import LoginModalPatient from './auth/LoginModalPatient'


const PatientArea= () =>{
    return(

      
        <div className="container">
     <div class="contact-container">
        <div class="right-col">
          <h1>Online consultation</h1>
          <p>

          Secure teleconsultation 5 days a week from 6 a.m. to 11 p.m. 100% reimbursed by Health Insurance. Register to make an appointment</p>
          <form id="contact-form" method="post" action="/contact">
            <label for="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
            />
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
            />
            <label for="password">Password </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Your password"
            />< RegisterModalPatient/>
          </form>
        </div>
        <div>
      <Card className="client-signin">
        <CardImg top width="30%" src="https://png.pngtree.com/png-vector/20200629/ourlarge/pngtree-women-wearing-masks-to-prevent-the-flu-and-the-corona-virus-png-image_2268997.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Already have an account</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Click down to sign-in</CardSubtitle>
          <LoginModalPatient />
          
        </CardBody>
        
      </Card>
      
    </div>
      </div>
    
    </div>
    )};
    export default  PatientArea;

