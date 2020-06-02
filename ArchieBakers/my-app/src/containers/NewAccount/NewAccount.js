import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Col} from 'react-bootstrap';
import BackgroundImg from '../../Assets/backgroundImg.jpg';
import './NewAccount.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Navigation from '../UI/Navigation/Navigation';
class NewAccount extends Component{
    state={
        submitStatus:false,
        name:"",
        email:"",
        password:"",
        address:"",
        address2:"",
        city:"",
        state:"",
        zip:""
    }

    userName=this.userName.bind(this);
   
    userEmail = this.userEmail.bind(this);
    userPasswd = this.userPasswd.bind(this);
    userAddress = this.userAddress.bind(this);
    userAddress2 = this.userAddress2.bind(this);
    userCity = this.userCity.bind(this);
    userState=this.userState.bind(this);
    userZip = this.userZip.bind(this);
    
    userName(event){
      this.setState({
        name:event.target.value
      })
    }

    userEmail(event){
      this.setState({
        email:event.target.value
      })

    }

    userPasswd(event){
      this.setState({
        password:event.target.value
      })

    }

    userAddress(event){
      this.setState({
       address:event.target.value
      })

    }

    userAddress2(event){
      this.setState({
       address2:event.target.value
      })

    }

    userCity(event){
      this.setState({
       city:event.target.value
      })

    }

    userState(event){
      this.setState({
       state:event.target.value
      })

    }
    userZip(event){
      this.setState({
       zip:event.target.value
      })

    }
  
  
  

 
    RedirectTo=(event)=>{
        event.preventDefault();
        this.setState({
            submitStatus:true
        })
        axios.post('http://localhost:8000/SignUp',{
          "name":this.state.name,
          "email":this.state.email,
          "password":this.state.password,
          "address":this.state.address,
          "address2":this.state.address2,
          "city":this.state.city,
          "state":this.state.state,
          "zip":this.state.zip

        })

    }
    render(){
        var redirect=null;
        if(this.state.submitStatus){
            redirect=<Redirect to="/"/>
        }
        return(
        
        <div>
        <Navigation/>
        {redirect}
        <img src={BackgroundImg} alt="" className="LoginBox"/>
        <Form className="FormBox2">
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder="1234 Main St" onChange={this.userName} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={this.userEmail} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={this.userPasswd}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" onChange={this.userAddress} />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" onChange={this.userAddress2}/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={this.userCity} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" value="Choose..." onChange={this.userState}>
        <option>Choose...</option>
        <option>Texas</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={this.userZip} />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" style={{backgroundColor:'palevioletred'}} onClick={this.RedirectTo}>
    Submit
  </Button>

        </Form>
        </div>
        )
    }
}

export default NewAccount;