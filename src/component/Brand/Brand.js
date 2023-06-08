import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./Brand.module.scss";

const Brand = () => {
  return (
    <div className={classes.brand_wrapper}>

<div className={classes.brand_listsection}>
    <div className={classes.brand}>
        {/* logos */}
 <div className={classes.brand_logo}>
 <div className={classes.brand_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/Levi_s_logo_160x.svg?v=1680331699"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.brand_logo}>
 <div className={classes.brand_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/logo-zwart-wit_320x.png?v=1644308935"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.brand_logo}>
 <div className={classes.brand_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/BOAS_Logo_Transparent_320x.png?v=1646145898"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.brand_logo}>
 <div className={classes.brand_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/logotipo_happy_flute_Logotipo5_320x.png?v=1643811879"
          alt="example"
        />
      </Link>
 </div>
    </div>
       {/* logos close */}
    </div>
</div>
    </div>
  )
}

export default Brand