import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {adminLoad} from '../actions/authActions';
import {membersLoad} from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';


const Admin = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const[allcolis, setAllcolis] = useState([]);
  const[members, setMembers] = useState([]);

  useEffect(() => {
     dispatch(adminLoad())
     dispatch(membersLoad())
     if(auth.adminloading){
        setAllcolis(auth.adminloading);
     };
     
  }, [auth.adminloading]);
    
    return(
        <Container>
            <h2>Hello Admin</h2>
            <h3>Those are all the requests:</h3>
            
            <Jumbotron>
                {allcolis.map(el => <div>
                    <p><strong>REQUEST:</strong><br></br>
                    CREATED AT: <strong>{el.created_at}</strong> -- TYPE: {el.type} -- FROM <strong>{el.departure}</strong>To <strong>{el.arrival}</strong> in <strong>{el.days}</strong> DAYS<br></br>
                    THE RECEIVER INFORMATIONS: <br></br>
                    EMAIL: {el.receiver} <br></br> </p>
                 </div>)}

            </Jumbotron>

            <Jumbotron>

            </Jumbotron>
        </Container>
    )

}

export default Admin;