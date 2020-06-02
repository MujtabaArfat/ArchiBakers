import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Radium from 'radium';
import {Route,Switch} from 'react-router-dom';
import Login from './containers/Login/Login';
import Landing from './components/Landing/Landing';
import NewAccount from './containers/NewAccount/NewAccount';
import Cakes from './containers/Cakes/Cakes';
import Shakes from './containers/Shakes/Shakes';
import Checkout from './containers/CheckOut/CheckOut';

class App extends Component {
  
  
  state={
    name:"",
    address:"",
    address2:""
}
setStateValue(props){
  this.setState({
    name:props.name,
    address:props.address,
    address2:""
  })

}

componentDidUpdate(){
  console.log("YES")
}


  
  render(){
    

  return (
    
    <div className="App">
    <Switch>
    <Route path="/" exact component={Landing}/>
    <Route path="/login" exact component={Login}></Route>
    <Route path="/NewAccount" exact component={NewAccount}></Route>
    <Route path="/Cakes" exact component={Cakes}></Route>
    <Route path ="/Shakes" exact component={Shakes}></Route>
    <Route path="/Checkout" exact component={Checkout}></Route>
    
    </Switch>
    
    </div>
  );
}
}

export default Radium(App);
