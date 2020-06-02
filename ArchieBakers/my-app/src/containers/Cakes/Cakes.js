import React,{Component} from 'react';
import BackgroundImg from '../../Assets/backgroundImg.jpg';
import Posts from '../../components/Posts/Posts';
import Navigation from '../UI/Navigation/Navigation';
class Cakes extends Component{


    state={
        itemList:[]
    }
    
    

    
  addCardItem=(info)=>{
    if(this.state.itemList.length==0){
        this.setState({itemList:[info]})
        localStorage.setItem("cartList",this.state.itemList);
    }
    else{
        
            localStorage.clear();
            var itemHolder = this.state.itemList
            this.setState({
                    itemList:[...itemHolder,info]
            })
            
            localStorage.clear();
            }
    
            localStorage.setItem("cartList",this.state.itemList);
    
    }

    render(){
       
       
        return(
            <div>
              <img src={BackgroundImg} alt="" className="LoginBox" />
             <Navigation/>
             <Posts  addCardItem={this.addCardItem}/>
            </div>
        )
    }
}

export default Cakes;