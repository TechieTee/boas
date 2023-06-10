import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import classes from './TestimonialSlider.module.scss'

const testimonials = [
  {
    id: 1,
    rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
    name: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    rating: <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>,
    name: 'Jane Smith',
    content: 'Praesent at quam eu ipsum viverra varius.',
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  return (
    <div className={classes.testimonial_slider}>
      <div className={classes.testimonial_items}>
        <div className={classes.testimonial}>
        <p className={classes.testimonial_content}>{testimonials[currentSlide].rating}</p>
        <p className={classes.testimonial_content}>{testimonials[currentSlide].content}</p>
        <p className={classes.testimonial_name}>{testimonials[currentSlide].name}</p>
      </div>
      <div className={classes.testimonial}>
      <p className={classes.testimonial_content}>{testimonials[currentSlide].rating}</p>
        <p className={classes.testimonial_content}>{testimonials[currentSlide].content}</p>
        <p className={classes.testimonial_name}>{testimonials[currentSlide].name}</p>
      </div>
      </div>
      <div className={classes.testimonial_navigation}>
        <button onClick={handlePrev}></button>
        <button onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
