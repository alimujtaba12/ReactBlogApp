import { Link } from "react-router-dom";
function Blog({ blogs }) {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <div className="card" key={blog.id}>
            <Link to={`/details/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
            <br />
            <p>Author By: {blog.author}</p>
          </div>
        );
      })}
    </>
  );
}

export default Blog;
