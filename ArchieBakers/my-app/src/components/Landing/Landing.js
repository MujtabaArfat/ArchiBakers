import React,{Component} from 'react';
import Videos from '../../containers/UI/Videos/Videos';
import Title from '../../containers/UI/Title/Title';
import Menu from '../../containers/Menu/Menu';
import AboutUs from '../../containers/AboutUs/AboutUs';
import Navigation from '../../containers/UI/Navigation/Navigation';
class Landing extends Component{
    

    // componentDidMount(){
    //     const name=this.props.location.state.params.name;
    //     const address=this.props.location.state.params.address;
    //     const address2 =this.props.location.state.params.address2;
        
    //     localStorage.removeItem("loggedInUser");
    //     localStorage.setItem("loggedInUser",JSON.stringify({
    //         loggedIn:true,
    //         name:name,
    //         address:address,
    //         address2:address2
    //     }))
    // }
        


render(){
    
    return(
        <div>
        <Navigation/>
            <Videos/>
        <Title>The Archi Bakers</Title>
        <Menu/>
        <AboutUs/>
        
        
        </div>
    )
}
}

export default Landing;