import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import {useDispatch} from "react-redux"
// import { deletemedicalFile} from '../../js/actions/medicalFileAction';


const CardMedicalFile = () => {
  // const user = useSelector((state) => state.authReducer.user);
    const medicalfile = useSelector((state) => state.medicalFileReducer.medicalfile);
    // const dispatch=useDispatch()
    // const history = useHistory();
    // history.push("/Dashboard_patient");
   
    // const delet=(_id,userId)=>{
    //    console.log("id",id)
    //     dispatch(deletemedicalFile(_id,userId))
        
    // //  }
    // const dispatch=useDispatch()
    // const delet=()=>{
    //     dispatch(deletemedicalFile(medicalfile._id))
    // }
    return (
        <div >
            <Card body>
          <CardTitle tag="h5">{medicalfile.weight}</CardTitle>
          <CardText>{medicalfile.medicalHistory}</CardText>
          <CardText>{medicalfile.allergiesName}</CardText>
          <CardText>{medicalfile.bloodType} </CardText>
         <div style={{display:"flex",justifyContent:"space-around"}} >
          {/* <Button  color="warning"   onClick={()=>delet(medicalfile._id)} >delete</Button> */}
          <Link to="/Dashboard_patient" ><Button  color="warning" >get allfiles</Button></Link>
            
          </div>
        </Card>
        </div>
    )
}

export default CardMedicalFile ;
