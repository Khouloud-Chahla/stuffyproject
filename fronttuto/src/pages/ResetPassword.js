import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import NavLogin from './NavLogin';
import {sendPwd} from '../actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import  Accordion   from 'react-bootstrap/Accordion';
               


const ResetPassword = () => {
    const Dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [state1, setState1] = useState({password:'a'});
    const [state2, setState2] = useState({password:'b'});
    const [state3, setState3] = useState(false);
    const [talk, setTalk] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        
        if(state1.password == state2.password){
            setState3(true);
        };
        if(state1.password !== state2.password){
            setState3(false);
        };
        if(state1.password == '' || state2.password == ''){
            setState3(false);
        };
    
},[state1, state2])

const handleChange1 = (e) => {
    e.preventDefault()
    setState1({...state1, [e.target.name]:e.target.value})
};
const handleChange2 = (e) => {
    e.preventDefault()
    setState2({...state2, [e.target.name]:e.target.value})
};
const send = () => {
    Dispatch(sendPwd(state2))
};

useEffect( () => {
    if(auth.generated){
        setTalk(true)
    }
    
},[auth.generated]);
useEffect( () => {
    if(auth.user){
        setUser(auth.user)
    }
    
},[auth.user]);




   return(

       <div>
           <br></br>
           <h1>Welcome back {user.firstname}</h1><h5>You have access to your account, Please add a new password:</h5>
           <br></br>
       <Container>
           <Accordion defaultActiveKey = '0'>
               <Card>
                   <Card.Header>
                       <Accordion.Toggle as={Button} variant='primary' eventKey='0'>
                           Change Password

                       </Accordion.Toggle>
                   </Card.Header>
                   <Accordion.Collapse eventKey='0'>
                       <Card.Body>
                       {!talk && 
                                   <div>
                                   <label>Password</label><br></br>
                                   <input type='password' name='password' onChange={handleChange1}/>
                                   <br></br>
                                   <label>Confirm password</label><br></br><input type='password' name='password' onChange={handleChange2}/><br></br>
                                   <br></br> 
                                    {state3 && <div>
                                        <h6 style={{color:'green'}}>Password Confirmed</h6><br></br><Button variant='success' onClick={send}>Validate</Button>
                                    </div>}  </div>}
                                    {talk && <p><h4>Password has been successfully changed</h4><br></br><Link to='/login'>LOGIN</Link></p>}
                            
                       </Card.Body>
                   </Accordion.Collapse>
               </Card>

           </Accordion>
           
        </Container></div>
   )
}
export default ResetPassword;