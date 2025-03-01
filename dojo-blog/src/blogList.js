import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title,HandleDelete}) => {
    //const blogs=props.blogs;
    //const title=props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by  {blog.author}</p>
                    </Link>
                    
                    {/* <button onClick={()=>HandleDelete(blog.id)}>Delete</button> */}
                    </div>
            ))

            }
        </div>
     );
}
 
export default BlogList;