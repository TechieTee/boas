import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./LogoList.module.scss";

const LogoList = () => {
  return (
    <div className={classes.logolist_wrapper}>

<div className={classes.logolist_listsection}>
    <div className={classes.logolist}>
        {/* logos */}

    <div className={classes.logolist_logo}>
 <div className={classes.logolist_logoimage}>
 <Link to="/about">
        <img
          src="//cdn.shopify.com/s/files/1/0598/2194/9121/files/NRC_logo_svg_110x.png?v=1675719317 110w, //cdn.shopify.com/s/files/1/0598/2194/9121/files/NRC_logo_svg_220x.png?v=1675719317 220w"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.logolist_logo}>
 <div className={classes.logolist_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/The-Life-You-Can-Save-Logo---Square---Standard_240x.png?v=1681814642"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.logolist_logo}>
 <div className={classes.logolist_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/Screenshot_2023-04-18_at_12.38.42_200x.png?v=1681814650"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.logolist_logo}>
 <div className={classes.logolist_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/nrc_future_affairs_logo_200x.jpg?v=1675117529"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.logolist_logo}>
 <div className={classes.logolist_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/ea-logo-square_240x.png?v=1675117511"
          alt="example"
        />
      </Link>
 </div>
    </div>
    <div className={classes.logolist_logo}>
 <div className={classes.logolist_logoimage}>
 <Link to="/about">
        <img
          src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/2022-vriendin-logo_240x.svg?v=1681817574"
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

export default LogoList