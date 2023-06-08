import Banner from "./component/Banner/Banner";
import Blog from "./component/Blog/Blog";
import Brand from "./component/Brand/Brand";
import GalleryImageCard from "./component/GalleryImageCard/GalleryImageCard";
import galleryImageCardData from "./component/GalleryImageCard/GalleryImageCardData";
import ImageText from "./component/ImageText/ImageText";
import Layout from "./component/Layout/Layout";
import LogoList from "./component/LogoList/LogoList";
import NewsLetter from "./component/NewsLetter/NewsLetter";
import Testimonial from "./component/Testimonial/Testimonial";
import classes from "./App.module.scss"

function App() {
  return (
    <Layout>
   
      <Banner />


      <h2 className={classes.brand_title}>We've been featured</h2>
 
      <LogoList />



 
      <ImageText />
     


      {/* gallerycardimage */}
    
      <div className={classes.galleryimagecard}>
     <ul className={classes.cards}>
        {galleryImageCardData.map((todo) => (
          <GalleryImageCard
            key={todo.id}
            title={todo.title}
            content={todo.content}
          />
        ))}
    </ul>
    </div>
    
    <h2 className={classes.brand_title}>For the little ones</h2>
      {/* gallerycardimage */}
      
      <div className={classes.galleryimagecard}>
     <ul className={classes.cards}>
        {galleryImageCardData.map((todo) => (
          <GalleryImageCard
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
 
    
     

      {/* gallerycardimage */}

      <div className={classes.galleryimagecard}>
     <ul className={classes.cards}>
       
          <GalleryImageCard
         
            title="€2.378"
            content="Donated to charities that save kids' lives!"
          />
     
    </ul>
    </div>
     <h2>Our Brands</h2>
      <Brand />
      <Blog />
      <NewsLetter  title="Join the lifesaver newsletter" />
    </Layout>
  );
}

export default App;

// import Layout from "./component/layout/Layout";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";
// import PageThree from "./pages/PageThree";

// function App() {
//     return (
//         <Layout>
//             <Routes>
//             <Route exact path="/" component={Home} />
//             <Route path="/page-one" component={PageOne} />
//             <Route path="/page-two" component={PageTwo} />
//             <Route path="/page-three" component={PageThree} />

//             </Routes>
//         </Layout>
//     );
// }

// export default App;
