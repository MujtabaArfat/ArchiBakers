import React from 'react';
import Cards from '../../containers/UI/Cards/Cards';
import Pagination from '../Pagination/Pagination';
import './CakeBox.css';

const postCakes=({posts,loading,totalpost,postperpage,changePage,addCardItem})=>{
    
    const postings = (posts.map(post=>(
        <Cards name={post.title} body={post.body} addCardItem={addCardItem}/>
       
    )))
    if(loading)
        return <h2>Loading ...</h2>
    return (
            <div >
                <h1 className="CakeParent">Freshly baked Cakes</h1>
                <div className="CakeBox">
                {postings}
                </div>
                <Pagination totalpost={totalpost} postperpage={postperpage} changePage={changePage}/>
            </div>
           
        
    )
}
export default postCakes;