import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PostCakes from '../PostCakes/PostCakes';


const Postings=(props)=>{
  
  
 const [posts,setPosts] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

    
useEffect(()=>{

    const fetchPosts=()=>{
        setLoading(true);
        axios.get('http://jsonplaceholder.typicode.com/posts').then(
            res=>{
                
                setPosts(res.data);
            }
        )
       
        setLoading(false);
     }
     
    fetchPosts();
},[]);


const indexOfLastPost =currentPage*postsPerPage;
const indexOfFirstPost = indexOfLastPost-postsPerPage;
const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost);




const changePage=(pageNumber)=>{
    setCurrentPage(pageNumber);
}

    
    return(<div>

    <PostCakes posts={currentPosts} loading={loading} totalpost={posts} postperpage={postsPerPage} changePage={changePage} addCardItem={props.addCardItem}></PostCakes>

    </div>)

}

export default Postings;
