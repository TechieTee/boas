import React from "react";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner_div}>
        <h2 className={classes.banner_heading}>Meet the new shopping experience for vintage jeans</h2>
        <p className={classes.banner_text}>BOAS is the best place for sustainable and pre-owned fashion, where all profits are donated to charity.</p>
        <div className={classes.banner_buttons}>
          <button className={classes.banner_button_shop}>ddd</button> <button className={classes.banner_button_learn}>ddd</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
