import React,{Component} from 'react';
import './SubTitle.css';
class SubTitle extends Component{
    render(){

        return(

            <span className="SubTitleName">{this.props.children}</span>
        )
    }
}

export default SubTitle;