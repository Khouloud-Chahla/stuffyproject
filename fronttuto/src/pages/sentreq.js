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

import { loadUser } from '../actions/authActions';

const Sentreq = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return(
        <Container>
            <NavMain/>
            <br></br>
            <Jumbotron>
            {auth.colis && 
                    <div>
                         <h4 style={{color:'green'}}>Your request has been sent successfully</h4><br></br>
                         <Accordion>
                          <Card>
                              <Card.Header>
                                 <Accordion.Toggle as={Button} variant="success" eventKey="0">
                                   Show request
                                 </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                              <Card.Body><h4>You're sending a parcel on <strong>{auth.colis.created_at}</strong>:</h4>
                              <p>of Type: <strong>{auth.colis.type}</strong> for <strong>{auth.colis.receiver}</strong><br></br>
                              It will be delivered in <strong>{auth.colis.days} days</strong> from <strong>{auth.colis.departure}</strong> to <strong>{auth.colis.arrival}</strong></p>
                              <br></br>
                              <h2 style={{color:'green'}}>THANK YOU FOR YOUR TRUST</h2>
                              </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                        </Accordion>
                    </div> 
                // <h2>Dear {auth.user.firstname}, we appreciate your trust. We will call you in 24 hours in order to pick up the parsel you're sending to {auth.colis.receiver}</h2>
                }
            </Jumbotron>
            <br></br>
            <Footer/>
        </Container>

    )
}
export default Sentreq;