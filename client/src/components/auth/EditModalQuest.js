import React,{useState} from "react";
import {useDispatch} from "react-redux";
// import {Link} from "react-router-dom"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import { editmedicalFile } from "../../js/actions/medicalFileAction";
import "../Questionnaire.css";


const EditMedicalFile = ({medicalFile}) => {
    const [weight,setWeight]=useState(medicalFile.weight)
    const [medicalHistory,setMedicalHistory]=useState(medicalFile.medicalHistory)
    const [allergiesName,setAllergiesName]=useState(medicalFile.allergiesName)
    const [bloodType,setBloodType]=useState(medicalFile.bloodType);
   
  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
      setWeight(medicalFile.weight)
      setMedicalHistory(medicalFile.medicalHistory)
      setAllergiesName(medicalFile.allergiesName)
      setBloodType(medicalFile.bloodType)
    };
  const dispatch=useDispatch()

  const edit=()=>{
    dispatch(editmedicalFile(medicalFile._id,{ weight, medicalHistory, allergiesName, bloodType}))
    toggle()
  }
//   setWeight('');
//   setMedicalHistory('');
//   setAllergiesName('');
//   setBloodType('');
  

  return (
    <div className="container">
    <div class="contact-container">
       {/* <div class="right-col"> */}
       <div className="component">
       
    <div>
    <Button color="warning" onClick={toggle}>edit</Button>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="examplePassword">Weight</Label>
        <Input
        value={weight}
        onChange={e=>setWeight(e.target.value)}
          type="text"
          name="weight"
          id="exampleweight"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail"> MedicalHistory</Label>
        <Input
        value={ medicalHistory}
        onChange={e=>setMedicalHistory(e.target.value)}
          type="text"
          name="medicalHistory"
          id="examplemedicalHistory"
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
          id="exampleallergiesName"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="bloodType"> BloodType </Label>
        <Input
        value={ bloodType}
        onChange={e=>setBloodType(e.target.value)}
          type="text"
          name="password"
          id="examplebloodType"
          placeholder="with a placeholder"
        />
      </FormGroup>
      
      </Form>     
       </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Edit modal</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
      </div>
      </div>
      </div>

      )
      };
    


export default EditMedicalFile;
 {/* <div>
      <Card className="Questionnaire">
      <CardImg top width="30%" src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-medical-supplies-medical-record-image_1456372.jpg"  alt="imgdossie" />
      <CardBody>
        <CardTitle tag="h5">Already have a medicalFile</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Click down to verify your medicalFile </CardSubtitle>
        
        <Link to="/medicalFile" > <Button color="warning">your medicalfile</Button></Link>
        </CardBody>
        
      </Card>
      </div>
     </div></div>
   
      // </div> */}
  


