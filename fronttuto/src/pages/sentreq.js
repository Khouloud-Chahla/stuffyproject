import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer';
import NavMain from './NavMain';
import Shake from 'react-reveal/Shake';
import Flash from 'react-reveal/Flash';

import { loadUser } from '../actions/authActions';

const Sentreq = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return(
        <Container>
            
            <br></br>
            <Jumbotron>
            {auth.colis && 
                    <div>
                        <Shake><h4 style={{color:'green'}}>Your request has been sent successfully</h4></Shake>
                         <br></br>
                         <Accordion>
                          <Card>
                              <Card.Header>
                                 <Accordion.Toggle as={Button} variant="success" eventKey="0">
                                   Show request
                                 </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                              <Card.Body style={{fontFamily:'cambria'}}><h4>You're sending a parcel on <strong>{auth.colis.created_at}</strong>:</h4>
                              <p>of Type: <strong>{auth.colis.type}</strong> for <strong>{auth.colis.receiver}</strong><br></br>
                              It will be delivered in <strong>{auth.colis.days} days</strong> from <strong>{auth.colis.departure}</strong> to <strong>{auth.colis.arrival}</strong><br></br>
                              The status of your request: <strong>{auth.colis.status}</strong></p>
                              <br></br>
                              <Flash><h1 style={{color:'purple', fontFamily:'cambria', fontStyle:'bold'}}>THANK YOU FOR YOUR TRUST</h1></Flash>
                              </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                        </Accordion>
                    </div> 
               
                }
            </Jumbotron>
            <br></br>
            
        </Container>

    )
}
export default Sentreq;