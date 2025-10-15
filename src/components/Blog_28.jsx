import React from 'react';
import { FaGlobe } from 'react-icons/fa6';
import { FaMugSaucer } from 'react-icons/fa6';

const Blog_28 = ({ id, img, category, title, descrip }) => {
  return (
    <article className="blog">
      <img src={img} alt={title} className="img blog-img" />
      <div className="blog-content">
        <span className="category">
          {category} {category === 'lifestyle' ? <FaMugSaucer /> : <FaGlobe />}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <a href="#">read more</a>
      </div>
    </article>
  );
};

export default Blog_28;
