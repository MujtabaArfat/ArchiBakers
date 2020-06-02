import React,{Component} from 'react';
import './CheckOut.css';
import SubTitle from '../UI/SubTitle/SubTitle';
import {Button} from 'react-bootstrap';
import Navigation from '../UI/Navigation/Navigation';


class CheckOut extends Component{

    state={
        itemsList:[],
        amount:0,
        cancel:false,
        edit:false
    }

render(){

    console.log(localStorage.getItem("cartItem"))

    return (<div className="CheckBackground">
            <Navigation />
            <SubTitle>CheckOut</SubTitle><br/>
            Item:{this.state.itemsList}
            <div >
            <Button className="ButtonBox" variant="danger">Cancel Payment</Button>

            <Button className="ButtonBox" variant="success">Make Payment</Button>
            </div>

            </div>)
}
}

export default CheckOut;