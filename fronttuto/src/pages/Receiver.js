import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <NavMain/>
        <br></br>
        <br></br>
        <Container>
           <br></br>
           <jumbotron>
               {received.length === 0 && <h3 style={{color:'maroon', fontStyle:'cambria'}}> You have no parcels yet to receive</h3>}
                {(received.length > 0) && received.map(el => 
                  <div>
                      <Accordion>
                        <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="success" eventKey="0">  
                               Parcel Received
                              </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                  <h3>You have a Parcel of type <strong>{el.type}</strong> to receive in <strong>{el.days} starting on <strong>{el.created_at}</strong></strong> </h3>
                                  <h2 style={{color:'maroon'}}>We will call you to confirm the delivery</h2>
                                  <h2 style={{color:'green'}}>THANK YOU FOR YOUR TRUST</h2>
                              </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                        </Accordion>

                  </div>)}
                  <br></br>
           </jumbotron>
           <br></br>
       </Container>
       <Footer/>
       </div>
   )

}
export default Receiver;