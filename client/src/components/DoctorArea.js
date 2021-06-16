import React from 'react';
import './PatientArea.css';
import ModalDoctor from "./ModalDoctor";

import {
  Card, CardImg,  CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const DoctorArea= ({doctor}) =>{
    return(

      
        <div className="container">
     <div class="contact-container">
        <div class="right-col">
          <h1>Online consultation</h1>
          <p>Covid-carte.tn is a 100% online, Tunisian teleconsultation solution with no time commitment.</p>
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
            />
            <label for="CIN">CIN</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Your cin number"
            />
            <Button color="warning">Join our team</Button>
          </form>
        </div>
        <div>
      <Card className="client-signin">
        <CardImg top width="30%" src="https://c8.alamy.com/comp/2BNWP9M/medicine-avatars-set-with-female-doctors-and-nurses-vector-icons-isolated-on-white-2BNWP9M.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Already have doctor account</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Click down to sign-in</CardSubtitle>
          <Button color="warning">sign-in</Button>
          <ModalDoctor  doctor={doctor}/>
        </CardBody>
      </Card>
    </div>
      </div>
    
    </div>
    )};
    export default  DoctorArea;

