import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {adminLoad} from '../actions/authActions';
import {membersLoad} from '../actions/authActions';
import {updateStatus} from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import Flip from 'react-reveal/Flip';


const Admin = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const[allcolis, setAllcolis] = useState([]);
  const[members, setMembers] = useState([]);
  const[status, setStatus] = useState({etat: '', num: ''});
  
  


  useEffect( () => {
      dispatch(adminLoad())
      dispatch(membersLoad())
      
  },[auth.updatereq])

  useEffect( () => {
    if(auth.adminloading){
        setAllcolis(auth.adminloading)
    }
    if(auth.members){
        setMembers(auth.members)
    }
    if(auth.updatereq){
        auth.updatereq = false;
    }
    
  },[auth.members, auth.adminloading, auth.updatereq])

  const handleChange = (e) => {
      setStatus({...status, [e.target.name]:e.target.value})
      
      

  }
  const send = e => {
      e.preventDefault();
      dispatch(updateStatus(status))
      
  }

    return(
        <Container style={{width:'800px'}}>
            <br></br>
            <Flip><h1>Hello Admin</h1></Flip>
            <br></br>
            <div style={{display:'flex'}}>
            <Jumbotron>
              <h3>All the requests:</h3><br></br>
                {allcolis.map(el =><Card> 
                    <br></br>
                    <p><strong style={{color:'red'}}>REQUEST ID: <span style={{color:'black'}} id="elt">{el._id}</span></strong>
                    <br></br>
                    OWNER EMAIL: <strong style={{color:'black'}}>{el.emailowner}</strong><br></br>
                    CREATED AT: <strong>{el.created_at}</strong><br></br> TYPE: {el.type}<br></br>FROM <strong>{el.departure}</strong> To <strong>{el.arrival}</strong><br></br>Delivery in <strong>{el.days}</strong> DAYS<br></br>
                    STATUS: <strong>{el.status}</strong><br></br>
                    RECEIVER EMAIL: <strong style={{color: 'black'}}>{el.receiver}</strong>
                    <br></br>
                    <br></br>
                    
                    <span style={{color: 'green', fontSize:'20px'}}>Change request STATUS </span><br></br>
                    <form>
                    <label>Enter the request ID: </label><br></br><input type='text' name='num' onChange={handleChange}/>
                    <br></br>
                    <br></br>
                    <label>Choose Status</label><br></br>
                    <select name='etat' onChange={handleChange}>
                        <option value='no information'></option>
                        <option value='not took yet'>Not took yet</option>
                        <option value='took'>Took</option>
                        <option value='in transit'>In transit</option>
                        <option value='transported'>Transported</option>
                    </select>
                    </form>
                    <br></br>
                    <Button onClick={send} variant='success'>Update</Button>
                    
                     </p>
                     <br></br>
                 </Card>)}
            </Jumbotron>
            
            <Jumbotron>
                <h3>All the Members:</h3><br></br>
                {members.map( el => <div>
                    <p><strong style={{color:'red'}}>MEMBER:</strong><br></br>User e-mail: <strong>{el.email}</strong><br></br>User address: <strong>{el.address}</strong><br></br>
                     User Phone: <strong>{el.phone}</strong></p>
                </div>)}
            </Jumbotron>
            </div>
         </Container> 
    )

}

export default Admin;