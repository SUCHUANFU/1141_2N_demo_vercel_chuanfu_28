import { useState } from 'react';
import blogData_28 from '../assets/data/blogData.json';
import Blog_28 from '../components/Blog_28';

const BlogLocalJsonPage_28 = () => {
  const [name] = useState('chuanfu');
  const [id] = useState(213410128);
  const [blogs_28, setBlogs_28] = useState(blogData_28);

  return (
    <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json -- {name}, {id}</h2>
      </div>

      <div className="blogs-center">
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

export default BlogLocalJsonPage_28;
