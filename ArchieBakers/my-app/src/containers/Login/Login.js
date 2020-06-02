import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import BackgroundImg from '../../Assets/backgroundImg.jpg';
import './Login.css';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import Navigation from '../UI/Navigation/Navigation';
class Login extends Component{
    state={
        submitStatus:false,
        name:"",
        email:"",
        password:"",
        address:"",
        address2:"",
    
        redirect:false
        
    }
    userName= this.userName.bind(this);
    userEmail = this.userEmail.bind(this);
    userPass = this.userPass.bind(this);

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
    userPass(event){
      this.setState({
        password:event.target.value
      })
    }
    RedirectTo=(event)=>{
        event.preventDefault();
        this.setState({
            submitStatus:true,
        })


        if(this.state.submitStatus===true){
          console.log("HERE")
          axios.post('http://localhost:8000/login',{
          email: this.state.email,
          password:this.state.password

          }).then((res)=>{
            this.setState({
              name:res.data.name,
              address:res.data.address,
              address2:res.data.address2,
              redirect:true

            })
            localStorage.setItem("currentUser",{
              name:this.state.name,
              address:this.state.address,
              address2:this.state.address2
            })
            console.log(res.data);
            localStorage.clear();
            localStorage.removeItem("loggedInUser");
            localStorage.setItem("loggedInUser",JSON.stringify({
            loggedIn:true,
            name:this.state.name,
            address:this.state.address,
            address2:this.state.address2
        }))
            

          })

          
        }
        

    }


    render(){
        var redirect=null;
       if(this.state.redirect){
         
         const path="/";
         redirect=<Redirect to={path} />
       }
        
        return(
        <div>
          {redirect}
          <Navigation />
        <img src={BackgroundImg} alt="" className="LoginBox"/>
        <Form className="FormBox">
        <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.userEmail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.userPass} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Label >Create a new account?</Form.Label><Link to="/NewAccount" style={{textDecoration:'none',color:'palevioletred'}}> New Account</Link> <br/>
  <Button variant="primary" type="submit" style={{backgroundColor:'palevioletred'}} onClick={this.RedirectTo}>
    Submit
  </Button>

        </Form>
        </div>
        )
    }
}

export default Login;