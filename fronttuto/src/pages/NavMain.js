import React , {useEffect}from 'react';
import {Link} from 'react-router-dom';
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
              <Navbar.Brand href="/" style={{color:'white',display:'flex'}}><HomeIcon/>MyStuff Service</Navbar.Brand>
              <Nav className="justify-content-left">
              {/* <Nav.Link href="/main">Home<br></br>Accueil</Nav.Link> */}
              <Nav.Link href="/sender">Send a Parcel<br></br>Envoyer un Colis</Nav.Link>
              <Nav.Link href="/parsel">My Parcels<br></br>Mes Colis</Nav.Link>
              <Nav.Link href="/receiver">To Receive<br></br>A Recevoir</Nav.Link>
              
              <Nav.Link href="/">Who are we<br></br>Qui sommes nous</Nav.Link>
              <Nav.Link href="/">Contact us<br></br>Contacter-nous</Nav.Link>
              <Nav.Link href="/" onClick={() => logout()}>Logout<br></br>Déconnexion</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form> */}
          </Navbar>
    )
}
export default NavMain;