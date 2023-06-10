import React from "react";
import classes from "./GalleryImageCard.module.scss"
import {galleryImageCardsData} from "./GalleryImageCardsData"
import ImageCard from "./ImageCard";

const GalleryImageCard = ({ title, content, important }) => {
  return (

  
    <div className={classes.galleryimagecard}>
    <ul className={classes.cards}>
       {galleryImageCardsData.map((todo) => (
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

export default GalleryImageCard;





