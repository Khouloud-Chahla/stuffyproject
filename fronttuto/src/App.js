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
import Footer from './pages/Footer';
import Reset from './pages/Reset';
import Edit from './pages/Edit';
import Validation from './pages/Validation';
import Verified from './pages/Verified';
import NavMain from './pages/NavMain';
import ResetPassword from './pages/ResetPassword';
import Codesend from './pages/Codesend';

// import {AlertDismissibleExample} from './pages/Register'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Router>
         <NavMain/>
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/sender' component={Sender}/>
           <Route exact path='/sender/add' component={Sender}/>
           <Route exact path='/receiver' component={Receiver}/>
           <Route exact path='/register' component={Register}/>
           <Route exact path='/register/verify' component={Validation}/>
           <Route exact path='/verificate/:token' component={Verified}/>
           <PrivateRoute exact path='/main' component={Main}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/parsel' component={Parcels}/>
           <Route exact path='/request' component={Sentreq}/>
           <PrivateRoute exact path='/admin' component={Admin}/>
           <Route path='/admin/mbr' component={Admin}/>
           <Route exact path='/edit' component={Edit}/>
           <Route exact path='/edit/reset' component={Reset}/>
           <Route exact path='/reset' component={Codesend}/>
           <PrivateRoute exact path='/edit/resetaccount' component={ResetPassword}/>
         </Switch>
         <Footer/>
       </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
