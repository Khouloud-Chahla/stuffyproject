import React, { useEffect, useState } from 'react';
import Reveal from 'react-reveal/Reveal';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
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
import {verify} from '../actions/authActions';
import Particles from "react-tsparticles";


const Main = ({ history }) => {
  
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)
  const [user, setUser] = useState({})

  useEffect(() => {
     dispatch(loadUser());  
  }, [])
  useEffect( () => {
      if(auth.user){
         setUser(auth.user)
      }
  },[auth.user])

const admin = () => {
   if(user !== {}){
      if(user.identity == 'admin'){
         return true
      }
   }
}
 
  

  //
    return(
   <div>
      
      <Container>
        <br></br>
           <br></br>
               <div>
                  
                <div style={{display:'flex',justifyContent:'space-between'}}>
                   {/* <div style={{display:'flex'}}>
                     <AccountCircleIcon style={{fontSize:'xxx-large'}}/>
                     {auth.user && <h3>Welcome <strong style={{color:'blue'}}>{auth.user.firstname}</strong>:</h3>}
                   </div> */}
                   {/* <Welcome/> */}
                     {auth.user && <Flip left><h1> Welcome {auth.user.firstname}</h1></Flip>}
                   <div>
                     {/* <Add/> */}
                     {admin() && <button><Link to ='/admin'> Go to Admin Directory </Link></button>} 
                     
                     {/* <ListPersons/>   */}
                   </div>  
                </div>  

                <LightSpeed right>
               <h4 style={{fontSize:'30px', color:'grey',textAlign:'left'}}>Your satisfaction is our ultimate goal...<InsertEmoticonIcon/></h4>
               </LightSpeed>
           </div>
           <br></br>
           <br></br>
           
            <div style={{ display:'flex', justifyContent:'space-between'}}>  
               <Container style={{ display:'flex', justifyContent:'space-between'}}>
              
                     <Card style={{ width: '28rem' }}>
                        <Card.Text>
                  
                         A parcel to send ?
                         <br></br>
                          Send a request and we'll deliver your parcel
                          
                        </Card.Text>
                   
                        <Link to='/sender'><Button variant="success">Send request</Button></Link>
              
                        <Card.Body> 
                   
                          <Card.Img variant="top" src={photo3} />
                        </Card.Body>
                
                      </Card>
                      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
          
                     <Card style={{ width: '28rem' }}>
                         <Card.Text>
                             You're already having a parcel to receive ?<br></br>Show reception details<br></br>
                         </Card.Text>
                   
                         <Link to='/receiver'><Button variant="success">Receive a parcel</Button></Link>
            
                          <Card.Body>
                            <Card.Img variant="top" src={photo4} />
                          </Card.Body>
                
                              {/* <Card.Img variant="top" src={photo2} /> */}
                     </Card>
                     </Container>
         
               
            </div>
          </Container>
          <br></br>
          
       </div>
    )

}
export default Main;