import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './Blog.module.scss'

const BlogSlider = ({ blogs }) => {
  return (
    <div className={classes.blog_wrapper}>
       <div className={classes.blog}>
    <Carousel >
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </Carousel>
    </div></div>
  );
};

export default BlogSlider;
