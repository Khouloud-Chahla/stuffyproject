import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const Data = () => {
    // state for the duration
    const[days, setDuration] = useState('')
    const handleChange = e => {
        setDuration(e.target.value);
    }
    const[nature, setNature] = useState('')
    const handleChange2 = e => {
        setNature(e.target.value);
    }
    return(
        <div>
                <form style={{}}>
                    <div>
                         <label style={{color: 'black'}}><h6>You need the parcel to be delivered in:</h6></label>
                            <div><input type="radio" name="jr" value="7" onChange={handleChange}/><label><h6>  7 days</h6></label><br></br></div>
                            <div><input type="radio" name="jr" value="4" onChange={handleChange}/><label><h6>  4 days</h6></label><br></br></div>
                            <div><input type="radio" name="jr" value="2" onChange={handleChange}/><label><h6>  2 days</h6></label><br></br></div>
                    </div>        
                    <div>  
                         <label style={{color:'black'}}><h6>The type of the parsel you're sending:</h6></label>
                         <br></br>         
                                   <select>
                                       <option value="alimentaire" onClick={handleChange2}>Food</option>
                                       <option value="vestimentaire" onClick={handleChange2}>Clothing</option>
                                       <option value="accessoire" onClick={handleChange2}>Accessories</option>
                                       <option value="electronique" onClick={handleChange2}>Electronics</option>
                                       <option value="artisanal" onClick={handleChange2}>Artisanal</option>
                                       <option value="electromenager" onClick={handleChange2}>Home Appliance</option>
                                       <option value="piéces mecaniques" onClick={handleChange2}>Machanical</option>
                                       <option value="autre" onClick={handleChange2}>Other</option>
                                   </select>
                    </div>                  
                            
                </form>  
            
        </div>

    )}
 
export default Data;