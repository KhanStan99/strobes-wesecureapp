import React from 'react';
import './styles/App.css';
import { Grid, Row, Column, Button } from 'carbon-components-react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";
import constants from '../constants';

function LoginSSO() {
  const responseGoogle = (response) => {
    console.log(response)
    if(response.profileObj)
    alert(JSON.stringify(response.profileObj))
  };

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
              <GoogleLogin
                clientId={constants.googleKey}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <Button onClick={renderProps.onClick}
                    disabled={renderProps.disabled} kind="tertiary">Login with Google</Button>

                )}
              />

            </Row>
            <Row className="input-row"><Link to="login">Login with Organization?</Link></Row>

          </Grid>

          <Grid style={{ justifyContent: 'center', textAlign: 'center', marginTop: '70px' }}><b>© Copyright Strobes 2020. All Rights Reserved.  </b></Grid>

        </Column>
      </Row>
    </Grid >

  );
}

export default LoginSSO;
