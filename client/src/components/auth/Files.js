// import React from "react";
// import { useSelector } from 'react-redux';

// import { CardDeck, Card } from "react-bootstrap";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
// import EmailIcon from "@material-ui/icons/Email";
// import DetailsIcon from "@material-ui/icons/Details";
// import { Spinner } from 'reactstrap';
// import { Link } from "react-router-dom";

// const Users = () => {
//  const user = useSelector((state) => state.authReducer.user);
// if (!user) 
//        return (
//          <div style={{ textAlign: 'center', marginTop: '50px' }}>
//            <Spinner
//              style={{ width: '3rem', height: '3rem', color: 'secondary' }}
//              type="grow"
//            />
//          </div>
//        )
     
//   return (
//     <div className="container">
//     <div class="contact-container">
//       <head><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /></head>
//       <CardDeck>
//         <Card>
//           <Card.Title>
//             <h1>Patient Profile Card</h1>
//             <h3>{user.name}</h3>
//           </Card.Title>

//           <Card.Body>
//             <Card.Img
//               width="50%"
//               src="https://intouchhealth.com/wp-content/uploads/2019/02/telemedicine.jpg"
//             />
//             <Card.Text>
//               <h4>"{user.lastName}"</h4>
//               <h4>"{user.email}"</h4>
//             </Card.Text>

//               <FacebookIcon /> <PhoneInTalkIcon /> <EmailIcon />
//               <Link to="/Questionnaire">
//           <li><a href="/Questionnaire"><button color="warning"> More details </button> </a></li></Link>
//               <DetailsIcon />

//           </Card.Body>
//         </Card>
//       </CardDeck>
//     </div>
//     </div>
//   );
  
//   }
// export default Users;

 
 import React from 'react'
import { Card,CardTitle, CardText,Button } from 'reactstrap';

 import { useSelector } from 'react-redux';

 import { Spinner } from 'reactstrap';
 import { Link } from "react-router-dom";




 const CardPatient = () => {
   
     const user = useSelector((state) => state.authReducer.user);
   if (!user) 
       return (
         <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spinner
            style={{ width: '3rem', height: '3rem', color: 'secondary' }}
            type="grow"
          />
        </div>
      );
       
  
    return (
      

          <div style={{minWidth:"400px",margin:"20px"}} >
           
             <Card body>
             <h3> Welcome Patient </h3>
           <CardTitle tag="h5">{user.name}</CardTitle>
           <CardText>{user.lastName}</CardText>

        <CardText>{user.email}</CardText>
          
        <div style={{display:"flex",justifyContent:"space-around"}} >
           <p>dear patient please answer the following questions by clicking on the button below so that we can build your medical file to consult your doctor</p>
        </div>
        <Link to="/Questionnaire" > <Button>More Details</Button> </Link>
        </Card>
       </div>
   )
    }

 export default CardPatient;
//https://intouchhealth.com/wp-content/uploads/2019/02/telemedicine.jpg
//https://material-ui.com/components/modal/#server-side-modal
