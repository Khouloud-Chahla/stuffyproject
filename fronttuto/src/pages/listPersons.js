import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const ListPersons = () => {
    return(
        <Accordion defaultActiveKey="0">
            <Card>
             <Card.Header>
                  <Accordion.Toggle as={Button} variant="info" eventKey="0">
                      Persons Already Added
                  </Accordion.Toggle>
             </Card.Header>
                   <Accordion.Collapse eventKey="0">
                      <Card.Body></Card.Body>
                   </Accordion.Collapse>
           </Card>
        </Accordion>
    )
}
export default ListPersons;