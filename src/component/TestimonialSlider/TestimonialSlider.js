import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import classes from './TestimonialSlider.module.scss'

const testimonials = [
    {
        id: 1,
        rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
        name: '- "André"',
        content: '"It\'s normally so time consuming to read labels, BOAS does that for me."',
      },
      {
    id: 2,
    rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
    name: '- "Fleur"',
    content: '"In Indonesia I\'ve seen first-hand what climate change does to forests. Anything that tries to help is desperately needed."',
  },
  {
    id: 3,
    rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
    name: '- "Aleksey"',
    content: '"I normally need to go to 4 different websites to buy sustainable stuff for my children. I like that BOAS is trying to be the one stop shop for kid stuff."',
  },
  
  
  {
    id: 4,
    rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
    name: '- "Marieke"',
    content: '"Buying sustainable takes a lot of time, until now."',
  },
  {
    id: 5,
    rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
    name: '- "Ruben"',
    content: '"If I shop sustainable I want to have filters to quickly find what\'s what."',
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 2));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 2));
  };

  return (
    <div className={classes.testimonial_slider}>
      <div className={classes.testimonial_items}>
        <div className={classes.testimonial}>
        <p className={classes.testimonial_rating}>{testimonials[currentSlide].rating}</p>
        <p className={classes.testimonial_content}>{testimonials[currentSlide].content}</p>
        <p className={classes.testimonial_name}>{testimonials[currentSlide].name}</p>
      </div>
      <div className={classes.testimonial}>
      <p className={classes.testimonial_rating}>{testimonials[currentSlide].rating}</p>
        <p className={classes.testimonial_content}>{testimonials[currentSlide].content}</p>
        <p className={classes.testimonial_name}>{testimonials[currentSlide].name}</p>
      </div>
      </div>
      <div className={classes.testimonial_navigation}>
        <span className={classes.testimonial_navigationbutton} onClick={handlePrev}></span>
        <span className={classes.testimonial_navigationbutton} onClick={handleNext}></span>
        <span className={classes.testimonial_navigationbutton} onClick={handlePrev}></span>
        <span className={classes.testimonial_navigationbutton} onClick={handlePrev}></span>
        <span className={classes.testimonial_navigationbutton} onClick={handlePrev}></span>
      </div>
    </div>
  );
};

export default TestimonialSlider;
