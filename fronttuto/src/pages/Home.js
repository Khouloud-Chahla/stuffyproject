import React, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Sender from './Sender';
import Receiver from './Receiver';
import Stuff from './Stuff';
import Navbar from './Navbar1';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
// import mystuff from './mystuff.png';
// import Compregister from './compregister';
// import Complogin from './complogin';
// import { fadeIn } from 'react-animations'
// import { bounce } from 'react-animations';
import name from './images/name.png';
import expres from './images/deli.jpg';
import photo1 from './images/pack3.jpg';
import photo2 from './images/pack2.jpg';
import photo3 from './images/colis.jpg';
import {useSelector} from 'react-redux'

const Home = () => {
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    // if(auth.isAuth)  
  })
  return(
    <div>
      <Navbar/>
      <Container>
        
        <br></br>
        <div>
        <Carousel>
              <Carousel.Item style={{color:'orange',fontSize:'50px'}}>
                {/* <p
                src = ""
                alt="Do You have a Parcel to send or to receive ?"
                // style={{width:'900px', heigth:'200px'}}
                /> */}
                <h1>DO YOU HAVE A PARCEL TO SEND OR TO RECEIVE</h1>
                <Carousel.Caption  style={{color:'purple',fontSize:'50px'}}>
                   
                 </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item style={{color:'orange',fontSize:'50px'}}>
                {/* <img
                // src={photo2}
                alt="We provide safe and rapid transportation service"
                // style={{width:'900px', heigth:'200px'}}
                /> */}
                <h1>WE PROVIDE SAFE AND RAPID TRANSPORTATION </h1>
                <Carousel.Caption>
                 </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
        </div>
        <br></br>
        <Stuff/>
        <br></br>
        <Container>
          <Carousel>
              <Carousel.Item style={{color:'green',fontSize:'60px'}}>
                <img
                src={expres}
                alt="We provide you safe and rapid transportation service"
                style={{width:'900px', heigth:'200px'}}
                />
                <Carousel.Caption>
                  <h1 style={{color:'darkblue', fontStyle:'italic', fontSize:'50px'}}>Create an account and get your parcel</h1>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{color:'purple',fontSize:'60px'}}>
                   <img
                   src={photo2}
                   alt="You have a package to send or to receive? "
                   style={{width:'900px', heigth:'200px'}}
                 />
                <Carousel.Caption>
                  <h1 style={{color:'darkblue', fontStyle:'italic',fontSize:'50px'}} >Best delevery service</h1>
                  
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
      </Container>
      <Footer/>
      
    </div>  
     
     

    
  )
}
export default Home;

