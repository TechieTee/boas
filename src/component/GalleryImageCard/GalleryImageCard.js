import React from "react";
import classes from "./GalleryImageCard.module.scss"

const GalleryImageCard = ({ title, content, important }) => {
  return (

  
    <li className={classes.cards_item}>
      <div className={classes.card_overlay}>
        {/* <div className={classes.card_image}><img src="https://picsum.photos/500/300/?image=10"/></div> */}
        <div className={classes.card_content}>
          <h2 className={classes.card_title}>{title}</h2>
          <p className={classes.card_text}>{content}</p>
          <button className={classes.btn_card_btn}>Read More</button>
        </div>
      </div>
    </li>
 

  );
};

export default GalleryImageCard;





