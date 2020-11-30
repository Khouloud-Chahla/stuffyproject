import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { searchMembers } from '../actions/authActions';
import {loadUser} from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Add = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const[key, setKey]=useState('');
  const handleChange = (e) => {
      setKey(e.target.value);
  };
  useEffect(() => {
    dispatch(searchMembers());
    if(auth.members){
        setNames(auth.members);
    }
    console.log("workiiiiiiing")
 },[isAuth]);   
 const [names, setNames]=useState([]);
 const[searchResults, setSearchresults]=useState([]);

  useEffect(() => {
      const results = names.filter(name => name.toLowerCase().includes(key.toLowerCase()));
      setSearchresults(results);
  },[key]);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3"><strong>Add a person</strong><br></br>You want to exchange packs with:</Popover.Title>
      <Popover.Content>
         <Form inline>
            <div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
            <label>{searchResults.map(el => <p>{el}</p>)}</label>
            </div>
            <Button variant="outline-light" >Search</Button>
         </Form>
      </Popover.Content>
    </Popover>
  );
  
  return(
  
     <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
         <Button variant="primary" ><PersonAddIcon/></Button>
     </OverlayTrigger>
     
  );
}

export default Add;