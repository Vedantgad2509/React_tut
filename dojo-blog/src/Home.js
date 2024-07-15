import { useState,useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {
    const {data:blogs,isLoading,error}=useFetch('http://localhost:8000/blogs');

    // const[name,setName]=useState('zed');
    // const[name,setName]=useState('asdib');
    // const[age,setAge]=useState(89);
    // const handleClick=()=> {
    //   setName('vedant');
    //   if(name==='vedant'){
    //     setName('asdib')
    //     setAge(19);
    //   }

    // const HandleDelete=(id)=>
    // {
    //     const newBlogs=blogs.filter(blog=>blog.id!=id);
    //     setBlogs(newBlogs);
    // }
    
   

   
        return ( 
            <div className="home">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading</div>}
               { blogs && <BlogList blogs={blogs} title="All Blocks" />}
                {/* <BlogList blogs={blogs.filter((blog)=>blog.author=="zed")} title="Zed's blog"/> */}
                    {/* <p>{name}  is {age}</p>
              <button onClick={handleClick}>click Me</button>  */}
              {/* <button onClick={()=>setName('luigi')}>change name</button> */}
              {/* <p>{name}</p> */}
            </div>
         );

    
    
}
 
export default Home;
