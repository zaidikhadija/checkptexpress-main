import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
// import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
// import{CSSTransition,TransitionGroup} from "react-transition-group";
import CardPatient from './auth/CardPatient'

import { getMedicalFile} from '../js/actions/medicalFileAction';
import "./Dashboard_patient.css";

const MedicalFileList = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMedicalFile())
    },[])
    const medicalFiles = useSelector(state=> state.medicalFileReducer.medicalFiles)
    // const medicalfile = useSelector(state=> state.medicalFileReducer.medicalfile)
    // const delett=(id)=>{
    //     console.log("id",id)
    //     dispatch(deletemedicalFile(id))
    // }
    //  const medicalFile = MedicalFiles.find((medicalFile) => medicalFile._id === match.params.id);
    
    return (
    <div className="container">
        
    //      {/* <div class="contact-container">  */}
    //        {/* <div className="component">  */}
           <div> 
         
            {
              medicalFiles &&  medicalFiles.map(medicalFile=>  <CardPatient key={medicalFile._id} medicalFile={medicalFile}  />  )
            }
        </div>
        </div>
        
        
        
     
        
        
    )
}

    


 export default MedicalFileList ;