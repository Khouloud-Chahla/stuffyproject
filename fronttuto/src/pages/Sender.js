import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NavMain from './NavMain';
import Footer from './Footer';
import {useDispatch, useSelector} from 'react-redux';
import {sendParsel} from '../actions/authActions';
import {loadUser} from '../actions/authActions';
import { searchMembers } from '../actions/authActions';
import { set } from 'mongoose';
// import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
// import InfoIcon from '@material-ui/icons/Info';
import Roll from 'react-reveal/Roll';

const Sender = ({history}) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth) //ds le auth ilya state dureducer auth

    //je vais créer le state et la fct handlechange:
    const[colis, setColis] = useState({
        days:'',
        type:'',
        departure:'',
        arrival:'',
        receiver:'',
    })
    const [key, setKey] = useState('');
    const [members, setMembers] = useState([])
    const [result, setResult] = useState([])
    
    const handleChange1 = e => {
        setKey(e.target.value);
        
        
    }
    useEffect( () => {
        setResult(members.filter(el => el.includes(key.toLowerCase())))
    },[key])

    useEffect(() => {
        if(auth.members){
            setMembers(auth.members)
        }
    },[auth.members])


    useEffect(() => {
        dispatch(loadUser())
        dispatch(searchMembers())
       
    },[])
    
    
    const handleChange = e => {
        setColis({...colis, [e.target.name]:e.target.value})
    };
    const sendNow = e => {
        e.preventDefault();
        dispatch(sendParsel(colis));
    };
    useEffect(() => {
        if(auth.colis){
          history.push("/request")
        }
    }, [auth.colis])

    {/* // remplir des info: formulaire
               // -- de ou vers ou ?les villes//ajouter un avatar '(
               //*****je dois utuliser l'API 'googlemaps'---> kilometres'(
               // --dans combien de jours, heures le collis va il etre transporté:)
               // --nature du collis: alimentaire, vestimentaire, article, electronique, argents, electromenager,..
               //Creation d'un formulaire */}
    return(
           <Container>
               <br></br> 
               <Roll top><h2 style={{fontFamily:'cambria', color:'green'}}>Add the following request details</h2></Roll>
            
            <br></br> 
             <Jumbotron>
                 <form onSubmit={sendNow}>
                     <div> 
                     <label style={{color: 'black'}}><h6>How many days you need the parcel to be delivered in:</h6></label>
                            <div><input type="radio" name="days" value="7" onChange={handleChange}/><label><h6>  7 days</h6></label><br></br></div>
                            <div><input type="radio" name="days" value="4" onChange={handleChange}/><label><h6>  4 days</h6></label><br></br></div>
                            <div><input type="radio" name="days" value="2" onChange={handleChange}/><label><h6>  2 days</h6></label><br></br></div>

                     </div>
                     <br></br>
                     <div> 
                     <label style={{color:'black'}}><h6>The type of the parsel you're sending:</h6></label>
                         <br></br>         
                                   <select name="type" onChange={handleChange}>
                                       <option  value=''></option>
                                       <option  value="food" >Food</option>
                                       <option  value="clothing" >Clothing</option>
                                       <option  value="accessories" >Accessories</option>
                                       <option  value="electronic" >Electronics</option>
                                       <option  value="mechanical" >Mechanical</option>
                                       <option  value="artisanal" >Artisanal</option>
                                       <option  value="homeAppliance" >Home Appliance</option>
                                       <option  value="other" >Other</option>
                                   </select>

                     </div>
                     <br></br>
                     <div> 
                     <label style={{color: 'black'}}><h6>The parcel will be delivered from where: </h6></label><br></br>
                        <select name="departure" onChange={handleChange}>
                             <option value = 'ville'></option>  
                             <option value="ariana">Ariana</option>
                             <option  value="beja" >Beja</option>
                             <option  value="benarous" >Ben Arous</option>
                             <option  value="bizerte" >Bizerte</option>
                             <option  value="elkef" >El Kef</option>
                             <option  value="gabes" >Gabes</option>
                             <option  value="gafsa" >Gafsa</option>
                             <option  value="jendouba" >Jendouba</option>
                             <option  value="kairaouen" >Kairaouen</option>
                             <option  value="kasserine" >Kasserine</option>
                             <option  value="kebeli" >Kebeli</option>
                             <option  value="mahdia" >Mahdia</option>
                             <option  value="monastir" >Monastir</option>
                             <option  value="nabeul" >Nabeul</option>
                             <option  value="sfax" >Sfax</option>
                             <option  value="sidibouzid" >Sidi Bouzid</option>
                             <option  value="siliana" >Siliana</option>
                             <option  value="sousse" >Sousse</option>
                             <option  value="tabarka" >Tabarka</option>
                             <option  value="tatawine" >Tatawine</option>
                             <option  value="tozeur" >Tozeur</option>
                             <option  value="zaghouen">Zaghouen</option>
                        </select> 
                        <br></br>
                        <label style={{color: 'black'}}><h6>To where?:</h6> </label><br></br> 
                           <select name="arrival" onChange={handleChange}>
                             <option value = 'ville'></option>  
                             <option value="ariana">Ariana</option>
                             <option  value="beja" >Beja</option>
                             <option  value="benarous" >Ben Arous</option>
                             <option  value="bizerte" >Bizerte</option>
                             <option  value="elkef" >El Kef</option>
                             <option  value="gabes" >Gabes</option>
                             <option  value="gafsa" >Gafsa</option>
                             <option  value="jendouba" >Jendouba</option>
                             <option  value="kairaouen" >Kairaouen</option>
                             <option  value="kasserine" >Kasserine</option>
                             <option  value="kebeli" >Kebeli</option>
                             <option  value="mahdia" >Mahdia</option>
                             <option  value="monastir" >Monastir</option>
                             <option  value="nabeul" >Nabeul</option>
                             <option  value="sfax" >Sfax</option>
                             <option  value="sidibouzid" >Sidi Bouzid</option>
                             <option  value="siliana" >Siliana</option>
                             <option  value="sousse" >Sousse</option>
                             <option  value="tabarka" >Tabarka</option>
                             <option  value="tatawine" >Tatawine</option>
                             <option  value="tozeur" >Tozeur</option>
                             <option  value="zaghouen">Zaghouen</option>
                           </select> 
                     </div>
                     <br></br>
                     <div>
                          <label><h6>Please type the e-mail of the receiver:</h6></label><br></br><input type='search' name='search' placeholder='search' onChange={handleChange1}/><p>   </p><input type='text' name='key' placeholder={(key=='') ? 'xyz@ddd.com' : result[0] }/><br></br><br></br>

                          <Col >
                              
                                  
                                  
                                  <div><label style={{color:'green'}}>Type it:</label><br></br><input type='text' name='receiver' onChange={handleChange}/></div>
                              
                              <br></br>
                              
                              <Row style={{justifyContent:'center', marginLeft:'0px'}}></Row>
                          

                          </Col>
                          


                             
                     </div>
                     <br></br> <br></br>
                     <Button type="submit" variant="primary">Send My Request</Button>
                 </form>
             </Jumbotron>
            
           </Container>   
    )
}
export default Sender;