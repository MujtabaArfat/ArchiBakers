import React,{Component} from 'react';
import Cards from '../UI/Cards/Cards';
import './Menu.css';
import SubTitle from '../UI/SubTitle/SubTitle';

class Menu extends Component{

    state={
        name:'',
        content:''
    }
render(){

    return(
        <div className="BackDrop">
        <SubTitle>Cakes</SubTitle>
        <div className="CakeItems">
        <Cards name="Cake1"/>
        <Cards name="Cakes2"/>
        <Cards name = "Cake3"/>
        </div>
       
        </div>
    )
}


}

export default Menu;