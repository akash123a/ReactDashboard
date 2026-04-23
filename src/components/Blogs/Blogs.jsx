import { useEffect, useState } from "react";
import api from "../../services/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then(res => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
        </div>
      ))}
      <h2 className="text-center mt-4">Blogs Page</h2>
      <div className="as"> thsi is a  Frontend  Blog Page </div>
    </div>
  );
}

export default Blogs;