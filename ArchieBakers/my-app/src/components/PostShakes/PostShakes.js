import React from 'react';
import './ShakeBox.css';
import Cards from '../../containers/UI/Cards/Cards';
import Pagination from '../Pagination/Pagination';
import SubTitle from '../../containers/UI/SubTitle/SubTitle';
const postShakes=(props)=>{



    var postings=null;

    if(props.loading)
        postings=<h1>Loading....</h1>
    else
    postings = props.posts.map((post,index)=>(
        <Cards name={post.title} body={post.body} id={index}  addCardItem={props.addCardItem}/>
        
    ))

   
   
    

return(<div className="ParentShakeBox" >
    <span style={{marginLeft:'20%'}}>
    <SubTitle>Shakes</SubTitle>
    </span>
    <ul className="ShakeBox container ">
    {postings}
    </ul>
    <section className="PageBox">
    <Pagination totalpost={props.totalPost}  postperpage={props.postPerPage} changePage={props.changePage}/>
    </section>
</div>)

}


export default postShakes;