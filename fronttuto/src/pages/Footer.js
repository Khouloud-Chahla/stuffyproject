import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return(
    <div>
    <Navbar className="justify-content-center" textAlign='space-around' activeKey="/home" bg="" variant="primary">
      <Nav.Item>
        <Nav.Link href="/register">FeedBack</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/login">Partners</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Confidence and Security</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="">Recrutement</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey=""><FacebookIcon/><br></br><InstagramIcon/></Nav.Link>
      </Nav.Item>
    </Navbar>
    </div>
  )
}
export default Footer;