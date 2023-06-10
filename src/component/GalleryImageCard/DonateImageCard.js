import React from "react";
import classes from "./GalleryImageCard.module.scss"
import {donateImageCardsData} from "./GalleryImageCardsData"
import ImageCard from "./ImageCard";

const DonateImageCard = ({ title, content, important }) => {
  return (

  
    <div className={classes.galleryimagecard}>
    <ul className={classes.cards}>
       {donateImageCardsData.map((todo) => (
         <ImageCard
           key={todo.id}
           title={todo.title}
           content={todo.content}
         />
       ))}
    </ul>
    </div>

  );
};

export default DonateImageCard;





