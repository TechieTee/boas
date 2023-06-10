import React from 'react'
import BlogSlider from './BlogSlider'


const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content: 'This is the content of Blog 1.',
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'This is the content of Blog 2.',
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'This is the content of Blog 3.',
    },
  ];
  
const Blog = () => {
  return (
    <div><BlogSlider blogs={blogs}/></div>
  )
}

export default Blog