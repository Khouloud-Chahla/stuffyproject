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

  useEffect( () => {
      dispatch(adminLoad())
      dispatch(membersLoad())
    
  },[])
  useEffect( () => {
    if(auth.adminloading){
        setAllcolis(auth.adminloading)
    }
    if(auth.members){
        setMembers(auth.members)
    }
  },[auth.members, auth.adminloading])

    
    return(
        <Container>
            
            <h2>Hello Admin</h2>
            <div style={{display:'flex'}}>
            
            <Jumbotron>
              <h3>All the requests:</h3><br></br>
                {allcolis.map(el => <div>
                    <p><strong style={{color:'red'}}>REQUEST:</strong><br></br>
                    OWNER EMAIL: <strong style={{color:'blue'}}>{el.emailowner}</strong><br></br>
                    CREATED AT: <strong>{el.created_at}</strong><br></br> TYPE: {el.type}<br></br>FROM <strong>{el.departure}</strong> To <strong>{el.arrival}</strong><br></br>Delivery in <strong>{el.days}</strong> DAYS<br></br>
                    <p style={{color:'purple'}}>
                    THE RECEIVER INFORMATIONS: <br></br>
                    EMAIL: <strong style={{color: 'blue'}}>{el.receiver}</strong><br></br>
                    <span style={{color: 'blueviolet'}}>STATUS</span><br></br>
                    <select>
                        <option></option>
                        <option>Not yet took</option>
                        <option>Took</option>
                        <option>In transit</option>
                        <option>Transported</option>
                    </select>
                    </p>
                     </p>
                 </div>)}
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