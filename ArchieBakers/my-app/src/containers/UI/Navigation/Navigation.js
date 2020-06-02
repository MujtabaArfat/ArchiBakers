import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component{
    state={
        name:"Login",
        setName:false

    }
    componentDidMount(){
        var user = JSON.parse(localStorage.getItem("loggedInUser"));
        if(user!=null){
           console.log(user)
            console.log("I am here nibba"+user.name);
            console.log(user.name);
            this.setState({
                name:user.name
            })
            

        }

        
    }


    render(){
        const style={
            'color':'white'
        }
        
        const user=localStorage.getItem("currentUser");
        

        return(
            <div className="NavHead" style={{width:'100%'}}>
            <Navbar fixed="top">
                <Navbar.Brand href="#home"style={{color:'rgb(255,105,180)',cursor:'pointer'}}>Logo</Navbar.Brand>
                <Nav className="mr-auto Box" style={style}>
                <Nav.Link href="/Cakes" style={{color:'rgb(255,105,180)',cursor:'pointer'}}>Cakes</Nav.Link>
                <Nav.Link href="/Shakes" style={{color:'rgb(255,105,180)',cursor:'pointer'}}>Shake</Nav.Link>
                <Nav.Link href="/Checkout" style={{color:'rgb(255,105,180)',cursor:'pointer'}}>Checkout</Nav.Link>
                <Nav.Link href="/login" style={{color:'rgb(255,105,180)',position:'relative',left:'370%',cursor:'pointer'}} onClick={this.props.clicked}>{this.state.name}</Nav.Link>
                </Nav>
            </Navbar> 
            </div>
        )
    }
}

export default Navigation