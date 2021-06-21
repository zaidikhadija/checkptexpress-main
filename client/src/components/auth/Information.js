import React from 'react'
import { Card,CardTitle, CardText } from 'reactstrap';

import { useSelector } from 'react-redux';

import { Spinner } from 'reactstrap';



const CardPatient = () => {
  
    const user = useSelector((state) => state.authReducer.user);
    if (!user) {
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spinner
            style={{ width: '3rem', height: '3rem', color: 'secondary' }}
            type="grow"
          />
        </div>
      );
    }
  
    return (
      

         <div style={{minWidth:"400px",margin:"20px"}} >
           
            <Card body>
            <h3>You are Welcome Patient </h3>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardText>{user.LastName}</CardText>

          <CardText>{user.email}</CardText>
          
         <div style={{display:"flex",justifyContent:"space-around"}} >
           <h4>This is the time for your appointment with your favorite doctor:Date</h4>
          </div>
        </Card>
        </div>
    )
}

export default CardPatient;
