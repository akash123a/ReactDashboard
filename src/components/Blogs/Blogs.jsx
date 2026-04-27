import { useEffect, useState } from "react";
import api from "../../services/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then(res => setBlogs(res.data));
  }, []);

  function ExpenseItem({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>$ {data.amount}</p>
      <p> {data.bike}</p>
    </div>
  );
}

  const expense = {
    title: "Food",
    amount: 100,
    bike: "Bajaaj Pulsar N160 USD Fork",
  };

  return (
    <>
      <div>
        <h2>Blogs</h2>

        {blogs.map(blog => (
          <div key={blog.id}>
            <h4>{blog.title}</h4>
          </div>
        ))}

        <h2 className="text-center mt-4">Blogs Page</h2>
        <div className="as">This is a Frontend Blogs</div>
      </div>

      <ExpenseItem data={expense} />
    </>
  );
}

// child component


export default Blogs;