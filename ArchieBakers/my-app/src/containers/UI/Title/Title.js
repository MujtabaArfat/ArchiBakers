import React,{Component} from 'react';
import './Title.css';
class Title extends Component{
    render(){

        return(

            <span className="TitleName">{this.props.children}</span>
        )
    }
}

export default Title;