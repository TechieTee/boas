import React from "react";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner_div}>
        <h2 className={classes.banner_heading}>Meet the new shopping experience for vintage jeans</h2>
        <p className={classes.banner_text}>BOAS is the best place for sustainable and pre-owned fashion, where all profits are donated to charity.</p>
        <div className={classes.banner_buttons}>
          <button className={classes.banner_button_shop}>SHOP NOW</button> <button className={classes.banner_button_learn}> <span><img style={{height: '15px'}} src="https://cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/play-cricle.png?v=87250203202699952401679307177"/></span>ABOUT OUR MISSION</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
