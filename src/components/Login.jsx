import React, { useState } from 'react';
import './styles/App.css';
import { Grid, Row, Column, FluidForm, TextInput, Button } from 'carbon-components-react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function Login() {
  const [company, setCompany] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setCompany(e.target.value)
  }

  const submit = () => {
    const profile = {
      company: company,
    }
    alert(JSON.stringify(profile))
  }

  return (
    <Grid >
      <Row className="App">
        <Column lg={3}><SideBar /></Column>
        <Column lg={9} className="main" style={{ paddingLeft: '250px' }}>
          <h2><b>strobes</b></h2>
          <h1 style={{ marginTop: '76px' }}>Log in</h1>
          <p><span>Don’t have an account?</span> <Link to="/">Register now</Link></p>
          <Grid style={{ marginTop: '50px' }}>
            <Row className="input-row">
              <FluidForm style={{ width: '280px' }}>
                <TextInput
                  id="company"
                  className="input-box"
                  helperText="Enter your organization"
                  value={company}
                  invalidText="A valid value is required"
                  labelText="Enter your organization"
                  placeholder="myorg.strobes.co"
                  onChange={handleChange}
                />
              </FluidForm>

            </Row>

            <Row className="input-row" style={{ width: '100%' }}><Button style={{ width: '280px' }} onClick={submit}>Continue</Button></Row>
            <Row className="input-row"><Link to="login-sso">Login with Google?</Link></Row>
          </Grid>

          <Grid style={{ justifyContent: 'center', textAlign: 'center', marginTop: '70px' }}><b>© Copyright Strobes 2020. All Rights Reserved.  </b></Grid>

        </Column>
      </Row>
    </Grid >

  );
}

export default Login;
