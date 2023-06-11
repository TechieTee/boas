import React from 'react'
import BlogSlider from './BlogSlider'


const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content: '',
    }
  ];
  
const Blog = () => {
  return (
    <div><BlogSlider blogs={blogs}/></div>
  )
}

export default Blog