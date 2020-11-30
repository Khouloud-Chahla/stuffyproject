import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import NavMain from './NavMain';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Add from './popover';
import ListPersons from './listPersons';
import Search from './Search';
import { loadUser } from '../actions/authActions';
import {showParcel} from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import photo1 from './images/pack3.jpg';
import photo2 from './images/pack2.jpg';
import photo3 from './images/colis.jpg';
import photo4 from './images/de.jpg';
import Welcome from './welcomeuser';

const Main = ({history}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
     dispatch(loadUser());
     
  }, [])
    return(
      <div>
      <NavMain/>
      <Container>
        <br></br>
           <br></br>
           <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                   {/* <div style={{display:'flex'}}>
                     <AccountCircleIcon style={{fontSize:'xxx-large'}}/>
                     {auth.user && <h3>Welcome <strong style={{color:'blue'}}>{auth.user.firstname}</strong>:</h3>}
                   </div> */}
                   <Welcome/>
                   <div>
                     <Add/>
                     
                     {/* <ListPersons/>   */}
                   </div>  
                </div>  

            
               <h4 style={{fontSize:'30px', color:'grey',textAlign:'left'}}>Your satisfaction is our ultimate goal...<InsertEmoticonIcon/></h4>
           </div>
           <br></br>
           <br></br>
           <div style={{display:'flex'}}>
           <Container style={{display:'flex',justifyContent:'space-between'}}>
           <Card style={{ width: '22rem' }}>
                   <Card.Text>
                      A parcel to send ?
                   <br></br>
                   Send a request and we'll deliver your parcel
                   {/* <br></br>
                   Un colis à envoyer ? Pas de soucis..
                   Envoyez une demande et nous livrerons votre colis */}
                   </Card.Text>
                   <br></br>
              <Card.Img variant="top" src={photo3} />
                <Card.Body> 
                   
                  <Link to='/sender'><Button variant="success">Send request<br></br>Demande d'envoi</Button></Link>
                </Card.Body>
                
          </Card>
          
          <Card style={{ width: '22rem' }}>
                   <Card.Text>
                     You're already having a parcel to receive ?<br></br>Show reception details<br></br>
                   </Card.Text>
                   <br></br>
            <Card.Img variant="top" src={photo4} />
                <Card.Body>
                  <Link to='/receiver'><Button variant="success">Receive a parcel<br></br>Recevoir un colis</Button></Link>
                </Card.Body>
                
                {/* <Card.Img variant="top" src={photo2} /> */}
          </Card>
          <Card style={{ width: '22rem' }}>
                   <Card.Text>
                     What about tracking my parcels<br></br>
                     Show details
                   </Card.Text>
                   <br></br>
                <Card.Body>
                  <Link to='/parsel'><Button variant="success">My parcels<br></br>Mes colis</Button></Link>
                </Card.Body>
                {/* <Card.Img variant="top" src="./images/colis.jpg" /> */}
          </Card>
          </Container>
          <ListPersons/>
          </div>
          </Container>
          <br></br>
          <br></br>
          <Footer/>
       |</div>
    )

}
export default Main;