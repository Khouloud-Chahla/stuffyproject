import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { searchMembers } from '../actions/authActions';
import {loadUser} from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)
  const [names, setNames]=useState([]);
  useEffect(() => {
    //  dispatch(loadUser());
     dispatch(searchMembers());
     if(auth.members){
         setNames(auth.members);
     }
     console.log("working")
  },[auth.members]); 
  

  const[key, setKey]=useState('');
  const handleChange = (e) => {
      setKey(e.target.value);
  };
  const[searchResults, setSearchresults]=useState([]);

  

      
   return(
       <div>
          <input type='text' placeholder='search' onChange={handleChange} />
          <ul>
              {searchResults.map(el => <li>{el}</li>)}
          </ul>
       </div>

   )

}
export default Search;