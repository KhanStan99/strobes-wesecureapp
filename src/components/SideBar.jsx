import './styles/App.css';
import { Grid, Row } from 'carbon-components-react';

function SideBar() {
  return (
    <div className="side-bar">
      <Grid className="side-bar-row">
        <Row >
          <h1>Risk-centered</h1>
          <p>Vulnerability Management</p>
        </Row>
        <Row >
          <h3>Security Workflows</h3>
          <p>Create and run playbooks to integrate
security into your CI/CD pipeline.</p>
        </Row>
      </Grid>
    </div>
  );
}

export default SideBar;
