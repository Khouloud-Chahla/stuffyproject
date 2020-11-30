import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Sender from './pages/Sender';
import Receiver from './pages/Receiver';
import Main from './pages/Main';
import Login from './pages/Login';
import Parcels from './pages/Parcels';
import PrivateRoute from './PrivateRoute';
import Sentreq from './pages/sentreq';
import Admin from './pages/Admin';
// import {AlertDismissibleExample} from './pages/Register'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Router>
         
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/sender' component={Sender}/>
           <Route exact path='/receiver' component={Receiver}/>
           <Route exact path='/register' component={Register}/>
           <PrivateRoute exact path='/main' component={Main}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/parsel' component={Parcels}/>
           <Route exact path='/request' component={Sentreq}/>
           <Route exact path='/admin' component={Admin}/>

         </Switch>
       </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
