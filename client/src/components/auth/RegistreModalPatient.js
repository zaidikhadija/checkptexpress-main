import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { registerUser } from '../../js/actions/authActions';

const RegisterModalPatient = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggle = () => {
    setModal(!modal);
  }; 

  const dispatch = useDispatch();
  // const history = useHistory();

  const handleRegister = () => {
    const newUser = { name, lastName, email, password };
    dispatch(registerUser(newUser));
    // history.push("/Dashboard_patient");
    

    setEmail('');
    setName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <Button color="warning" onClick={toggle}>Register  </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="name">Last Name</Label>
              <Input
                type="text"
                value={lastName}
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="mb-3"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleRegister}
              >
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModalPatient;