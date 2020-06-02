import React,{Component} from 'react';
import backgroundVideo from '../../../Assets/background.mov';
import './Videos.css';

class Videos extends Component{

    render(){

        return(
            <div>
            <div className="Tint"></div>
            <video className="BG" loop autoPlay>
            <source src={backgroundVideo} type="video/mp4"/>
            </video>
            </div>
            
        )
    }
}

export default Videos