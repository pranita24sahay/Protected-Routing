import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavItem, Button} from 'react-bootstrap';

function Home(props){
  return (
    <>
    <div className="container">
      <div className="Toolbar-grid">
        <Navbar className="navstyle col-sm-3" collapseOnSelect expand="md">
          <NavItem><Button onClick={props.handleLogin} className="button-style-1 btn1">Authenticate</Button></NavItem>
        </Navbar>                   
      </div>
    </div>
    <div className="container">
      <div className=" div-styling">
        <p><Link to='/dashboard'>View Documents</Link></p>
        <p className="tooltip">Did you authenticate yourself ? 
        <br className="visible-md visible-lg" />
          <span className="tooltiptext">The documents are confidential,for verified personnel only!</span>
        </p>
        <br className="visible-md visible-lg" />{props.user}
      </div>
    </div>
    </>
  )
};

export default Home;