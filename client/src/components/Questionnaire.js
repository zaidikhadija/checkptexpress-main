import React,{useState} from "react";
// import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createFile } from "../js/actions/medicalFileAction";
// const FileList = () => {
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         dispatch(getfiles())
//     },[])
//     const files=useSelector(state=> state.medicalFileReducer.files)

const AddMedicalFile = () => {
    const [weight,setWeight]=useState("")
    const [ medicalHistory,setMedicalHistory]=useState("")
    const [allergiesName,setAllergiesName]=useState("")
    const [bloodType,setBloodType]=useState("")
    const dispatch=useDispatch();

    
    // const history = useHistory();
  
    const addd = () => {
      const newFile= { weight, medicalHistory, allergiesName, bloodType};
      dispatch(createFile(newFile));
      // history.push("/Dashboard_patient");
    setWeight('');
    setMedicalHistory('');
    setAllergiesName('');
    setBloodType('');
    };

   
  return (
    <div className="home">
    <div className="container">
    <Form>
      <FormGroup>
        <Label for="examplePassword">Weight</Label>
        <Input
        value={weight}
        onChange={e=>setWeight(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail"> MedicalHistory</Label>
        <Input
        value={ medicalHistory}
        onChange={e=>setMedicalHistory(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">AllergiesName</Label>
        <Input
        value={allergiesName}
        onChange={e=>setAllergiesName(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail"> BloodType </Label>
        <Input
        value={ bloodType}
        onChange={e=>setBloodType(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
    <Link to="/Dashboard_patient" >  <Button  onClick={addd} >Questionnaire</Button></Link>
    </Form>
    </div></div>
  );
};


export default AddMedicalFile ;

