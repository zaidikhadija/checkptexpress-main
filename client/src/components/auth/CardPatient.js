import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
// import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { deletemedicalFile} from '../../js/actions/medicalFileAction';
import  './CardPatient.css';
import EditModalQuest from "./EditModalQuest";


const CardPatient = ({medicalFile}) => {
//   const user = useSelector((state) => state.authReducer.user);
// const medicalfile = useSelector(state=> state.medicalFileReducer.medicalfile)
    // const dispatch=useDispatch()
    // const history = useHistory();
    // history.push("/Dashboard_patient");
   
    // const delet=(_id,userId)=>{
    //    console.log("id",id)
    //     dispatch(deletemedicalFile(_id,userId))
        
    //  }
    
    const dispatch=useDispatch()
    const delett=(id)=>{
        dispatch(deletemedicalFile(id))

    }
    return (
        <div className="container">
         <div className="contact-container"> 
         
            <Card body style={{minWidth:"100px",margin:"20px"}} >
          <CardTitle tag="h5">{medicalFile.weight}</CardTitle>
          <CardText>{medicalFile.medicalHistory}</CardText>
          <CardText>{medicalFile.allergiesName}</CardText>
          <CardText>{medicalFile.bloodType} </CardText>
          <div style={{display:"flex",justifyContent:"space-around"}} >
         <Button  color="danger" onClick={()=>delett(medicalFile._id) }> delete </Button>
        <EditModalQuest  medicalFile={medicalFile} />
          </div>
        </Card>
        </div>
        </div>
        
    )
}

export default CardPatient;