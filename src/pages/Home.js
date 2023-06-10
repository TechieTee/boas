

import Brand from "../component/Brand/Brand";
import ImageText from "../component/ImageText/ImageText";
import LogoList from "../component/LogoList/LogoList";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Testimonial from "../component/Testimonial/Testimonial";
import classes from "../App.module.scss";
import Banner from "../component/Banner/Banner";
import Blog from "../component/Blog/Blog";
import {galleryImageCardsData, forTheNewBorn, donateImageCardsData} from "../component/GalleryImageCard/GalleryImageCardsData";
import ImageCard from "../component/GalleryImageCard/GalleryImageCard";



const Home = () => {
    return <>
 <Banner />


<h2 className={classes.brand_title}>We've been featured</h2>

<LogoList />




<ImageText />



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


<h2 className={classes.brand_title}>For the little ones</h2>


<div className={classes.galleryimagecard}>
    <ul className={classes.cards}>
       {forTheNewBorn.map((todo) => (
         <ImageCard
           key={todo.id}
           title={todo.title}
           content={todo.content}
         />
       ))}
    </ul>
    </div>

<Testimonial />


<ImageText />

<ImageText />





<div className={classes.galleryimagecard}>
    <ul className={classes.cards}>
       {donateImageCardsData.map((todo) => (
         <ImageCard
           key={todo.id}
           title={todo.title}
           content={todo.content}
           button
           buttontext="See Donations"
         />
       ))}
    </ul>
    </div>




<h2 className={classes.brand_title}>Our Brands</h2>

<Brand />
<h2 className={classes.brand_title}>BOAS' Blog</h2>
<Blog/>
<NewsLetter title="Join the lifesaver newsletter" />

    </>;
};

export default Home;
