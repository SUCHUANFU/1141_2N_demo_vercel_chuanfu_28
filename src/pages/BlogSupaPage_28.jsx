import { useState, useEffect } from 'react';
// import blogData_28 from '../assets/data/blogData.json';
import Blog_28 from '../components/Blog_28';

// const api_url = 'http://localhost:5000/api/blog_28';

import { supabase } from '../db/clientSupabase.js';

const BlogSupaPage_28 = () => {
  const [name, setName] = useState('chuanfu');
  const [id, setID] = useState(213410128);
  const [blogs_28, setBlogs_28] = useState([]);

  const fetchBlogFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('blog_28').select('*');
      // const response = await fetch(api_url);
      // const data = await response.json();
      console.log('blogs', data);
      setBlogs_28(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>
          blogs from Supabase -- {name}, {id}
        </h2>
      </div>

      <div className='blogs-center'>
        {blogs_28.map((item) => {
          const { id: blogId, title, descrip, category, img } = item;
          return (
            <Blog_28
              key={blogId ?? title}
              id={blogId}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogSupaPage_28;
