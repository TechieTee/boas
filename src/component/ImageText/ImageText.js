import React from 'react'
import { Link } from 'wouter';
import classes from "./ImageText.module.scss";

const ImageText = () => {
  return (
    <div className={classes.imagetext_wrapper}>
    <div className={classes.textimage_container}>
        <div className={classes.textimage_image}>
        <div className={classes.textimage_imagesize}>
        {/* <Link href="https://boas.co/collections/vintage-levis-jeans">  */}
        <img
          src="//cdn.shopify.com/s/files/1/0598/2194/9121/files/torso-of-a-person-sitting-on-a-rainbow-painted-bench_1024x1024.jpg?v=1681812229" alt="example"
        ></img>
 
      {/* </Link>   */}

          </div>
        </div>
        <div className={classes.textimage_textcontent}>
          <div >
            <h2 className={classes.imagetext_title} style={{paddingBottom:'15px'}}> Second-hand jeans at the perfect price</h2>
            <p>All our jeans prices drop every few hours - here's how it works:</p>
            <p>
              <strong>1</strong> - Find you perfect pair(s) <br/>
              <strong>2</strong> - Check the price and countdown timer <br/>
              <strong>3</strong> - Buy -or- wait for the price drop <br/>
            </p>
          <p> Wait too long and someone else will snatch your jeans...</p> 
            <button style={{marginTop:'15px'}}>Get your discounted jeans</button>
          </div>
        </div>
    </div>  </div>
  )
}

export default ImageText;