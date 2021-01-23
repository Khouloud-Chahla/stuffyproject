import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import NavLogin from './NavLogin';
import {sendEmail} from '../actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import Popper from '@material-ui/core/Popper';

const Reset = ({history}) => {
    const Dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [state, setState] = useState({email:''})
    const [talk, setTalk] = useState(false);
  
    const [lien, setLien] = useState(false)

    const handleChange = e => {
        e.preventDefault()
        setState({...state, [e.target.name]:e.target.value})
    }

    useEffect(() => {
       if(auth.generate){
           setTalk(true)
       }
       if(auth.generateCode){
           setLien(true)
           history.push('/edit/resetaccount')
       }
    },[state, auth.generate, auth.generateCode])

    const send = () => {
        Dispatch(sendEmail(state));
    }
    
    
    return(
        <div>
            {/* <NavLogin/> */}
            <br></br>
            <Container>
                <div>
                    <h4 style={{fontFamily:"cambria"}}>Hello member<br></br>In order to access your account we're sending you a link. Please type your e-mail address below:</h4>
                    <br></br>
                    <label style={{fontFamily:'cambria'}}>E-mail:</label><br></br>
                    <input type='text' id="click" name='email' onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <Button onClick={send} variant='success'>SEND LINK</Button>
                    <br></br>
                    <br></br>
                    {talk && <div><h5 style={{fontFamily:'cambria', fontSize:'30px', color:'green'}}>Link successfully sent</h5><br></br>
                    <Link to='/reset'>Enter Code</Link></div>} 
                    
                </div>
            </Container>
           
        </div>
    )
}

export default Reset;