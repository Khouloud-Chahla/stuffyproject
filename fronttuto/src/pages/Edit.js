import React, {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import expres from './images/deli.jpg';
import photo2 from './images/pack2.jpg';
import Card from 'react-bootstrap/Card';
import { Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import NavMain from './NavMain';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { loadUser } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../actions/authActions';
import {changePWD} from '../actions/authActions';
// import Cardcolor from './Cardcolor';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Carousel from 'react-bootstrap/Carousel';

import Stuff from './Stuff';
import Particles from "react-tsparticles";




const Edit = ({history}) => {

      

    const Dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [user, setUser] = useState({})
    const [pass, setPass] = useState(false)
    


    useEffect( () => {
        Dispatch(loadUser());
    },[])
    // useEffect( () => {
    //     if(auth.user){
    //         setUser(auth.user)
    //     }

    // },[auth.user])
    const [passwords, setPasswords] = useState({
        currentpassword: '',
        newpassword: '',
    })
    const [info, setInfo] = useState({
        firstname:'',
        lastname:'',
        address:'',
        phone:'',
    });
    const [talky, setTalky] = useState(false);
    useEffect( () => {
          if(auth.edit){
              setTalky(true)
          }
          if(auth.user){
              setUser(auth.user)
          }
        //   if(auth.edit && auth.isAuth){
        //       history.push('/main')
        //   }
          if(auth.passchange){
             setPass(true)
          }
    },[auth.edit, auth.isAuth, auth.user],auth.passchange)
    const handleChange = e => {
        e.preventDefault()
        setInfo({...info, [e.target.name]:e.target.value})
    };
    const handleChange1 = e => {
        e.preventDefault()
        setPasswords({...passwords, [e.target.name]:e.target.value})
    }; 
    const editNow = e => {
        e.preventDefault()
        Dispatch(editProfile(info))
    };
    const change = (e) => {
        e.preventDefault()
        Dispatch(changePWD(passwords))


    }

    return(
        <div style={{display:'flex'}}>
                <br></br>
                <br></br>
                <br></br>
                
                                 
           
            <br></br>
            <Container style={{ width: '300px', marginLeft:'100px'}}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                <Accordion defaultActiveKey="1">
                    {/* <Card>
                        <Card.Header> */}
                            <Accordion.Toggle as={Button} variant='secondary' eventKey="0">
                                Edit my informations 
                            </Accordion.Toggle>
                        {/* </Card.Header> */}
                        <Accordion.Collapse eventKey="0">
                            {/* <Card.Body> */}
                                <form>
                                    <br></br>
                                     <Col><div><label style={{fontFamily:'cambria', fontSize:'20px'}}>Firstname<span><h6 style={{color: 'red'}}>required</h6></span></label><br></br><input type='text' name="firstname" placeholder={user.firstname} onChange={handleChange}/></div></Col><br></br>
                                     <Col><div><label style={{fontFamily:'cambria', fontSize:'20px'}}>Lastname<span><h6 style={{color: 'red'}}>required</h6></span></label><br></br><input type='text' name="lastname" placeholder={user.lastname} onChange={handleChange}/></div></Col><br></br>
                                     <Col><div><label style={{fontFamily:'cambria', fontSize:'20px'}}>Address<span><h6 style={{color: 'red'}}>required</h6></span></label><br></br><input type='text' name="address" placeholder={user.address}  onChange={handleChange}/></div></Col><br></br>
                                     <Col><div><label style={{fontFamily:'cambria', fontSize:'20px'}} >Phone<span><h6 style={{color: 'red'}}>required</h6></span></label><br></br><input type='text' name="phone" placeholder={user.phone}  onChange={handleChange}/></div></Col>
                                     
                                     <br></br>
                                     <Button type='submit' variant='primary' onClick={editNow} >Validate</Button>
                                </form>
                            {/* </Card.Body> */}
                            
                        </Accordion.Collapse>
                        <br></br>
                        {talky && <h6 style={{color: 'green'}}>Your profile has been modified</h6>}
                    {/* </Card> */}
                </Accordion>
                    <br></br>
                    <br></br>
                <Accordion defaultActiveKey="1">
                      {/* <Card>
                             <Card.Header> */}
                                  <Accordion.Toggle as={Button} variant='secondary' eventKey="0">
                                      Change my password ?      
                                  </Accordion.Toggle>
                                  <br></br>
                              {/* </Card.Header> */}
                              <Accordion.Collapse eventKey="0">
                                  {/* <Card.Body> */}
                                      <form >
                                          <br></br>
                                            <Col><label style={{fontFamily:'cambria', fontSize:'20px'}}>Type your current password:</label><br></br><input type='password' name='currentpassword' onChange={handleChange1}/></Col>
                                            <br></br>
                                            <Col><label style={{fontFamily:'cambria', fontSize:'20px'}}>Type your new password:</label><br></br><input type='password' name='newpassword' onChange={handleChange1} /></Col>
                                            <br></br>
                                            <Col><Button variant='primary' onClick={change}>SEND</Button></Col>
                                        </form>
                                    {/* </Card.Body> */}
                                </Accordion.Collapse>
                                <br></br>
                            {pass && <h6 style={{color: 'green'}}>Your password has been changed</h6>}    
                        {/* </Card> */}
                 </Accordion> 
                 </Container>
                 <Container>
                     <br></br>
                 <Carousel>
              <Carousel.Item style={{color:'green',fontSize:'30px'}}>
                <img
                src={expres}
                alt="We provide you safe and rapid transportation service"
                style={{width:'600px', heigth:'300px'}}
                />
                <br></br>
                <Carousel.Caption>
                  <h1 style={{color:'darkblue', fontStyle:'italic', fontSize:'50px'}}>Create an account and get your parcel</h1>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{color:'purple',fontSize:'30px'}}>
                  <br></br>
                   <img
                   src={photo2}
                   alt="You have a package to send or to receive? "
                   style={{width:'600px', heigth:'300px'}}
                 />
                <Carousel.Caption>
                  <h1 style={{color:'darkblue', fontStyle:'italic',fontSize:'50px'}} >Best transportation service</h1>
                  
                </Carousel.Caption>
             </Carousel.Item>
             {/* <Carousel.Item style={{color:'maroon',fontSize:'30px'}}>
                  <img
                   className="d-block w-100"
                   src={photo2}
                   alt="Don't you worry about it!!"
                   style={{width:'200px', heigth:'100px'}}
                  />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
             </Carousel.Item> */}
           </Carousel>

                 </Container>
                 <br></br>
           

         </div> 
    )
}

export default Edit;