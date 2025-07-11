import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Bolgs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() =>{
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 border">
      <h3 className="text-3xl font-bold">Blogs : {blogs.length}</h3>
      <div>
        {
          blogs.map(blog => <Blog
             blog={blog}
             handleAddToBookmark = {handleAddToBookmark}
             handleMarkAsRead = {handleMarkAsRead}
             ></Blog>)
        }
      </div>
    </div>
  );
};

export default Bolgs;
