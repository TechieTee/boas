

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

  const imgText1 =  "//cdn.shopify.com/s/files/1/0598/2194/9121/files/torso-of-a-person-sitting-on-a-rainbow-painted-bench_1024x1024.jpg?v=1681812229"
  const imgText2 = "https://cdn.shopify.com/s/files/1/0598/2194/9121/files/Saving_kids_1_1296x.png?v=1672481489"
  const imgText3 = "https://cdn.shopify.com/s/files/1/0598/2194/9121/files/Sustainable_toys_1_1296x.png?v=1672482037"
    return <>
 <Banner />


<h2 className={classes.brand_title}>We've been featured</h2>

<LogoList />




<ImageText left src={imgText1} title='Second-hand jeans at the perfect price'  paragraphone="All our jeans prices drop every few hours - here's how it works:"  paragraphs paragraphtwo='Wait too long and someone else will snatch your jeans...

' btntxt='Get your discounted jeans' />



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


<ImageText right src={imgText2} title="Saving lives while you live yours" paragraphone="We donate all profits to save kids lives, instead of giving it to rich investors." paragraphtwo="Buy what you were already buying, for the same price, but now you're helping save kids lives, and that makes you a LifeSaver!" btntxt='Learn More'/>


<ImageText left src={imgText3} title="Sustainable Kids' Products" paragraphone="We read the labels, do the research and find the products you want, so you don/'t have to." paragraphtwo='Everything you want for your kid in one place.' btntxt='How?'/>





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
