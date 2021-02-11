import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shake from 'react-reveal/Shake';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import NavMain from './NavMain';
import Footer from './Footer';
import { useDispatch, useSelector} from 'react-redux';
import { loadUser } from '../actions/authActions';
import {receivedParcel } from '../actions/authActions';
import Flash from 'react-reveal/Flash';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';



const Receiver = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
     dispatch(loadUser());
     dispatch(receivedParcel());
  }, []);

  const[received, setReceived] = useState([]);

  useEffect(() => {
      if(auth.receivedP){
         setReceived(auth.receivedP);
      };
  }, [auth.receivedP]);

   return(
       <div>
        
        <Container>
           <br></br>
           <Jumbotron>
               {received.length === 0 && <Flash ><h3 style={{color:'maroon', fontStyle:'cambria'}}> You have no parcels yet to receive</h3></Flash>}
                {(received.length > 0) && received.map(el => 
                  <div>
                      <Accordion>
                        <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="primary" eventKey="0">  
                               You have a parcel to receive
                              </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                              <Card.Body style={{fontFamily:'cambria'}}>
                                  <h4 style={{fontStyle:'cambria', color:'black'}}>You have a Parcel from: <strong>{el.emailowner} </strong><br></br>of type <strong>{el.type} </strong> <br></br>You should receive it in <strong>{el.days} days</strong><br></br> starting on: <strong>{el.created_at} </strong><br></br>
                                  <br></br>The status of the request: <strong style={{fontStyle:'cambria', color:'black'}}>{el.status}</strong></h4>
                                  <br></br>
                                  <h3 style={{color:'maroon',fontFamily:'cambria', fontStyle:'bold'}}>We will call you <PhoneAndroidIcon/> to confirm the delivery :D </h3>

                                  <Shake><h1 style={{color:'green', fontStyle:'italic', fontFamily:'cambria'}}>THANK YOU FOR YOUR TRUST</h1></Shake>
                              </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                        </Accordion>
                        

                  </div>)}
                
                  <br></br>
           </Jumbotron>
           <br></br>
       </Container>
     
       </div>
   )

}
export default Receiver;