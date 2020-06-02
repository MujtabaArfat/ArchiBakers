import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

const Cards =(props)=>{

var [itemList,setItemList]=useState([]);

const addItem = (infoList) => {
  
    if(itemList.length==0)
      itemList=setItemList(infoList);
    else
     {
      setItemList([
        ...itemList,
        {
          id: infoList[0],
          value: Math.random() * 100,
          title:infoList[1],
          body:infoList[2]
        }
      ]);
      
      props.addCardItem(itemList);

    }
    
  };


        return(
            <div>
            
             <Card style={{ width: '18rem' ,backgroundColor:'white',borderRadius:'5% 5%',margin:'10px 15px'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.body}
            
            </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button className="ButtonBox" variant="danger" >Remove</Button>

            <Button className="ButtonBox" variant="success" onClick={()=>{addItem([props.id,props.title,props.body])}}>Add</Button>
            </Card.Body>
            </Card>  
            </div>
        )
    
}

export default Cards;