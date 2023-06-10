import React from 'react'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'
import classes from './Testimonial.module.scss'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className={classes.testimonial_wrapper}>    
     <div className={classes.testimonial}>   
     <h2>What our customers say</h2>
     <p className={classes.review}>See our 20 reviews on <FaStar /> Trustpilot</p>
    <TestimonialSlider />
    </div> </div>
  )
}

export default Testimonial