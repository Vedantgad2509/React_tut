import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './usefetch';


export default function BlogDetails() {
    const {id}=useParams();
    const {data:blog,error,isLoading} = useFetch('http://localhost:8000/blogs/'+ id);

    const history=useHistory;
    const handleClick=()=>{
      fetch('http://localhost:8000/blogs/'+blog.id,{
        method:'DELETE'
      }).then(()=>{
        history.push('/');

      })

    }

  return (
    <div className="blog-details">
        {/* <h2>Blog Details-{id}</h2> */}
        {isLoading && <div> Loading..</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>
              {blog.title}
            </h2>
            <p>Written By {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>delete</button>
          </article>
        )}

    </div>
  )
}
