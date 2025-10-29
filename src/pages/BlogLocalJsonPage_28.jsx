import React, { useState } from 'react';
import blogData_28 from '../assets/data/blogData.json';
import Blog2_28 from '../components/Blog2_28.jsx';
import Wrapper from '../assets/wrappers/Blog2_28';

const BlogLocalJsonPage_28 = () => {
  const [name] = useState('chuanfu');
  const [id] = useState(213410128);
  const [blogs_28, setBlogs_28] = useState(blogData_28);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}, {id}
          </h2>
        </div>

        <div className='blogs-center'>
          {blogs_28.map((item) => {
            const { id: blogId, title, descrip, category, img } = item;
            return (
              <Blog2_28
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
    </Wrapper>
  );
};

export default BlogLocalJsonPage_28;
