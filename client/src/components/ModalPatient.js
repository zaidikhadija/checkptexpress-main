
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';


const ModalPatient =()=>{

  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
    toggle()
  }

  return (
    <div>
        
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
        value="email"
        // onChange={e=>setEmail(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">tel</Label>
        <Input
        value="tel"
        // onChange={e=>setTel(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
        value="Password"
        // onChange={e=>setPassword(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
    
    </Form>     
       </ModalBody>
        <ModalFooter>
        <Button color="primary" >Add new Patient</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPatient ;