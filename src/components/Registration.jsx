import React, { useState } from 'react';
import './styles/App.css';
import { Grid, Row, Column, FluidForm, TextInput, Select, SelectItem, Button } from 'carbon-components-react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function Registration() {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [company, setCompany] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'fName') {
      setfName(e.target.value)
    } else if (e.target.id === 'lName') {
      setlName(e.target.value)
    } else if (e.target.id === 'company') {
      setCompany(e.target.value)
    } else if (e.target.id === 'profession') {
      setProfession(e.target.value)
    } else if (e.target.id === 'email') {
      setEmail(e.target.value)
    } else if (e.target.id === 'password') {
      setPassword(e.target.value)
    }
  }

  const submit = () => {
    const profile = {
      name: fName + ' ' + lName,
      company: company,
      profession: profession,
      email: email,
      password: password
    }
    alert(JSON.stringify(profile))
  }

  return (
    <Grid >
      <Row className="App">
        <Column lg={3}><SideBar /></Column>
        <Column lg={9} className="main">
          <h2><b>strobes</b></h2>
          <h1 style={{ marginTop: '76px' }}>Register</h1>
          <p><span>Already have an account?</span> <Link to="/login">Login</Link></p>
          <Grid style={{ marginTop: '50px' }}>
            <Row className="input-row">
              <FluidForm style={{ width: '48%' }}>
                <TextInput
                  className="input-box"
                  helperText="Enter First Name"
                  id="fName"
                  value={fName}
                  invalidText="A valid value is required"
                  labelText="Enter First Name"
                  placeholder="John"
                  onChange={handleChange}
                />
              </FluidForm>
              <FluidForm style={{ width: '48%' }}>
                <TextInput
                  className="input-box"
                  helperText="Enter Last Name"
                  id="lName"
                  value={lName}
                  onChange={handleChange}
                  invalidText="A valid value is required"
                  labelText="Enter Last Name"
                  placeholder="Doe"
                />
              </FluidForm>
            </Row>

            <Row className="input-row">
              <FluidForm style={{ width: '48%' }}>
                <TextInput
                  className="input-box"
                  helperText="Enter Company"
                  id="company"
                  value={company}
                  onChange={handleChange}
                  invalidText="A valid value is required"
                  labelText="Company"
                  placeholder="Acme Corp Inc"

                />
              </FluidForm>
              <Grid style={{ width: '48%' }}>
                <Select id="profession" value={profession} labelText="I am a:" onChange={handleChange}>

                  <SelectItem value="developer" text="Developer" />
                  <SelectItem value="qa" text="QA Engineer" />

                </Select>
              </Grid>
            </Row>

            <Row className="input-row">
              <FluidForm style={{ width: '48%' }}>
                <TextInput
                  className="input-box"
                  helperText="Enter Email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  invalidText="A valid value is required"
                  labelText="Email"
                  placeholder="john.doe@example.com"
                />
              </FluidForm>
              <FluidForm style={{ width: '48%' }}>
                <TextInput.PasswordInput
                  className="input-box"
                  helperText="Enter Password"
                  id="password"

                  value={password}
                  onChange={handleChange}
                  invalidText="A valid value is required"
                  labelText="Password"
                  placeholder="********"
                />
              </FluidForm>
            </Row>

            <Row className="input-row" style={{ width: '100%' }}><Button onClick={submit}>Continue to your free account</Button></Row>

            <Row className="input-row"><small>By creating a Strobes account, you consent to and fully accept our Privacy Policy. Terms of Service apply.</small></Row>


          </Grid>

          <Grid style={{ justifyContent: 'center', textAlign: 'center', marginTop: '70px' }}><b>© Copyright Strobes 2020. All Rights Reserved.  </b></Grid>

        </Column>
      </Row>
    </Grid >

  );
}

export default Registration;
