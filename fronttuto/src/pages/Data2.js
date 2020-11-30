import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const Data2 = () => {
    const[departure, setDeparture]= useState('none');
    const handleChange = e => {
        setDeparture(e.target.value);
    }
    const[arrival, setArrival] = useState('none');
    const handleChange2 = e => {
        setArrival(e.target.value);
    }

    return(
        <div>
            <form style={{}}>
                <div>
                  <label style={{color: 'black'}}><h6>The parcel will be delivered from where: </h6></label><br></br>
                  <select name="villes">
                             <option name="ariana">Ariana</option>
                             <option value="beja" onClick={handleChange}>Beja</option>
                             <option value="benarous" onClick={handleChange}>Ben Arous</option>
                             <option value="bizerte" onClick={handleChange}>Bizerte</option>
                             <option value="elkef" onClick={handleChange}>El Kef</option>
                             <option value="gabes" onClick={handleChange}>Gabes</option>
                             <option value="gafsa" onClick={handleChange}>Gafsa</option>
                             <option value="jendouba" onClick={handleChange}>Jendouba</option>
                             <option value="kairaouen" onClick={handleChange}>Kairaouen</option>
                             <option value="kasserine" onClick={handleChange}>Kasserine</option>
                             <option value="kebeli" onClick={handleChange}>Kebeli</option>
                             <option value="mahdia" onClick={handleChange}>Mahdia</option>
                             <option value="medenine" onClick={handleChange}>Medenine</option>
                             <option value="monastir" onClick={handleChange}>Monastir</option>
                             <option value="nabeul" onClick={handleChange}>Nabeul</option>
                             <option value="sfax" onClick={handleChange}>Sfax</option>
                             <option value="sidibouzid" onClick={handleChange}>Sidi Bouzid</option>
                             <option value="siliana" onClick={handleChange}>Siliana</option>
                             <option value="sousse" onClick={handleChange}>Sousse</option>
                             <option value="tabarka" onClick={handleChange}>Tabarka</option>
                             <option value="tatawine" onClick={handleChange}>Tatawine</option>
                             <option value="tozeur" onClick={handleChange}>Tozeur</option>
                             <option value="zaghouen" onClick={handleChange}>Zaghouen</option>
                         </select> 
                </div>
                <br></br>
                <div>
                      <label style={{color: 'black'}}><h6>To where?:</h6> </label><br></br> 
                      <select name="villes">
                             <option value="ariana" onClick={handleChange2}>Ariana</option>
                             <option value="beja" onClick={handleChange2}>Beja</option>
                             <option value="benarous" onClick={handleChange2}>Ben Arous</option>
                             <option value="bizerte" onClick={handleChange2}>Bizerte</option>
                             <option value="elkef" onClick={handleChange2}>El Kef</option>
                             <option value="gabes" onClick={handleChange2}>Gabes</option>
                             <option value="gafsa" onClick={handleChange2}>Gafsa</option>
                             <option value="jendouba" onClick={handleChange2}>Jendouba</option>
                             <option value="kairaouen" onClick={handleChange2}>Kairaouen</option>
                             <option value="kasserine" onClick={handleChange2}>Kasserine</option>
                             <option value="kebeli" onClick={handleChange2}>Kebeli</option>
                             <option value="mahdia" onClick={handleChange2}>Mahdia</option>
                             <option value="medenine" onClick={handleChange2}>Medenine</option>
                             <option value="monastir" onChange={handleChange2}>Monastir</option>
                             <option value="nabeul" onClick={handleChange2}>Nabeul</option>
                             <option value="sfax" onClick={handleChange2}>Sfax</option>
                             <option value="sidibouzid" onClick={handleChange2}>Sidi Bouzid</option>
                             <option value="siliana" onClick={handleChange2}>Siliana</option>
                             <option value="sousse" onClick={handleChange2}>Sousse</option>
                             <option value="tabarka" onClick={handleChange2}>Tabarka</option>
                             <option value="tatawine" onClick={handleChange2}>Tatawine</option>
                             <option value="tozeur" onClick={handleChange2}>Tozeur</option>
                             <option value="zaghouen" onClick={handleChange2}>Zaghouen</option>
                         </select>

                </div>
            </form>
        </div>
        
                //    <label style={{color: 'black'}}><h6>Votre Collis va etre transporté de la ville de: </h6></label><br></br>
                //     <form>    
                    
                        
                        
                //      </form>
                    
                //      
                //        <form>    
                        
                         
                          
                                                         
                // </form>
                 
        // <div>
        //     <h1 style={{color:'white'}}>STEP 2</h1>
            
        //     {/* <label style={{color:'black'}}>Destination</label>   */}
        
        // </div>
    )
}
export default Data2;