import React from "react";
import classes from "./NewsLetter.module.scss"

const NewsLetter = ({ title, content, important }) => {
  return (
<div className={classes.newsletter_wrapper}> 
  
    <div className={classes.newsletter}>
      <h2 className={classes.newsletter_title}>Join the Lifesaver Newsletter</h2>
      <p>Get updates and tips from the world of sustainability, circular fashion, and ethical business.</p>
   
    </div>
</div>
  );
};

export default NewsLetter;
