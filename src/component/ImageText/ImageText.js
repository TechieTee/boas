import React from 'react'
import classes from "./ImageText.module.scss";

const ImageText = ({left, right, src, title, paragraphone, paragraphs, paragraphtwo, btntxt}) => {
  return (
   <>
   { left && <div className={classes.imagetext_wrapper}>
    <div className={classes.textimage_container}>
        <div className={classes.textimage_image}>
        <div className={classes.textimage_imagesize}>
        <img style={{ borderRadius: '20px 0 0 20px'}}
          src={src} alt="example"
        ></img>
 
    

          </div>
        </div>
        <div className={classes.textimage_textcontent}>
          <div className={classes.content}>
            <h2 className={classes.imagetext_title} style={{paddingBottom:'10px'}}> {title}</h2>
            <p>{paragraphone}</p>
           {paragraphs &&  <p>
              <strong>1</strong> - Find you perfect pair(s) <br/>
              <strong>2</strong> - Check the price and countdown timer <br/>
              <strong>3</strong> - Buy -or- wait for the price drop <br/>
            </p>}
          <p>{paragraphtwo}</p> 
            <button style={{marginTop:'10px'}}> {btntxt}</button>
          </div>
        </div>
    </div> 
    </div>}
    { right && <div className={classes.imagetext_wrapper}>
    <div className={classes.textimage_container}>
    <div className={classes.textimage_textcontent}>
          <div className={classes.content}>
            <h2 className={classes.imagetext_title} style={{paddingBottom:'10px'}}> {title}</h2>
            <p>{paragraphone}</p>
           {paragraphs &&  <p>
              <strong>1</strong> - Find you perfect pair(s) <br/>
              <strong>2</strong> - Check the price and countdown timer <br/>
              <strong>3</strong> - Buy -or- wait for the price drop <br/>
            </p>}
          <p>{paragraphtwo}</p> 
            <button style={{marginTop:'10px'}}> {btntxt}</button>
          </div>
        </div>
        <div className={classes.textimage_image}>
        <div className={classes.textimage_imagesize}>
    
         <img style={{ borderRadius: '0 20px 20px 0'}}
          src={src} alt="example"
        ></img>
 


          </div>
        </div>
       
    </div> 
    </div>}
    </>
  )
}

export default ImageText;