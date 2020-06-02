import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PostShakes from '../PostShakes/PostShakes';

const PostsShakes =(props)=>{
const [Loading,setLoading]= useState(true)
const [posts,setPosts]=useState([]);
const [currentPage,setPage]=useState(1);
const [postPerPage]=useState(10);


useEffect(()=>{

    const fetchPosts=()=>{
        setLoading(true);
        axios.get('http://jsonplaceholder.typicode.com/posts').then(
            res=>{
                setLoading(false);
                setPosts(res.data);
            
            }
        )
       
        
     }
     
    fetchPosts();
},[]);

const lastIndex = currentPage*postPerPage;
const firstIndex = lastIndex-postPerPage;
const presentPage = posts.slice(firstIndex,lastIndex);


const changePage=(pageNumber)=>{
setPage(pageNumber);
}

return(<div>
    
    <PostShakes posts = {presentPage} totalPost={posts} postPerPage={postPerPage} loading={Loading} changePage={changePage} addCardItem={props.addCardItem}/>
    
</div>)
}


export default PostsShakes;