import React , {useEffect}from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button  from 'react-bootstrap/Button';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser , loadUser} from '../actions/authActions';


const NavMain = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(logoutUser())
    
  }
  useEffect(()=> {
    dispatch(loadUser())
  } , [])
    return(
            <Navbar className="justify-content-center" bg="dark" variant="info">
              <Col>
              <Navbar.Brand href="/" style={{color:'white',display:'flex'}}><HomeIcon/>MyStuff Service</Navbar.Brand>
              </Col>
              <Nav className="justify-content-left">
                {auth.isAuth ? (
                  <>
                    <Col><Nav.Link style={{color: 'white'}} href="/main">Home</Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/sender">Send a Parcel </Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/parsel">My requests for send</Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/receiver">What i have to receive</Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/edit">Edit my profile</Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/">Who are we</Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/">Contact us</Nav.Link></Col>
                    <Col><Nav.Link style={{color: 'white'}} href="/" onClick={() => logout()}>Logout</Nav.Link></Col>
                   
                  </>
                ) : (
                  <>
                  <Col><Nav.Link style={{color: 'white'}}  href="/">Home</Nav.Link></Col>
                  <Col><Nav.Link style={{color: 'white'}}  href="/login">Login</Nav.Link></Col>
                  <Col><Nav.Link style={{color: 'white'}} href="/register">Create an account</Nav.Link></Col>
                  <Col><Nav.Link style={{color: 'white'}} href="/">Who are we</Nav.Link></Col>
                  <Col><Nav.Link style={{color: 'white'}} href="/">Contact us</Nav.Link></Col>
                  </>
                )}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form> */}
          </Navbar>
    )
}
export default NavMain;