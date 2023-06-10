

import Brand from "../component/Brand/Brand";
import GalleryImageCards from "../component/GalleryImageCard/GalleryImageCards";
import ImageText from "../component/ImageText/ImageText";
import LogoList from "../component/LogoList/LogoList";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Testimonial from "../component/Testimonial/Testimonial";
import classes from "../App.module.scss";
import DonateImageCard from "../component/GalleryImageCard/DonateImageCard";
import Banner from "../component/Banner/Banner";
import Blog from "../component/Blog/Blog";



const Home = () => {
    return <>
 <Banner />


<h2 className={classes.brand_title}>We've been featured</h2>

<LogoList />




<ImageText />



<GalleryImageCards

/>


<h2 className={classes.brand_title}>For the little ones</h2>


<GalleryImageCards


/>

<Testimonial />


<ImageText />

<ImageText />





<DonateImageCard


/>




<h2 className={classes.brand_title}>Our Brands</h2>

<Brand />
<h2 className={classes.brand_title}>BOAS' Blog</h2>
<Blog/>
<NewsLetter title="Join the lifesaver newsletter" />

    </>;
};

export default Home;
