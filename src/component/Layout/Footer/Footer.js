import React from "react";
import { Link } from "wouter";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer_wrapper}>
        <div className={classes.section}>
        <div>
    <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/boas-logo.png?v=174546100373105226421679307177" alt="test" className={classes.logo}/>
  </div>
<p>You've made it to the end!</p>
   <p>Thanks for taking the time. If you're here because you're lost, feel free to and we'll get you  <Link a href="https://boas.co/pages/contact-us" style={{color:'#43A106'}}>contact us</Link>    back on track.
    </p>
    <br/>
   <h3>Follow Us On:</h3>


   <div className={classes.social_icons}>
      <Link href="https://www.facebook.com/BOASgoods/" target="_blank" className={classes.social_icons_link}>
      <div className={classes.social_icons_fab}> 
         <div className={classes.social_icons_logo}>
            <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/facebook_logo.png?v=111768930219237438961679307177" alt="test" className={classes.logo} />
        </div>
      </div>
      </Link>
      <Link href="https://www.instagram.com/boas.good/" target="_blank" className={classes.social_icons_link}>
      <div className={classes.social_icons_fab}> 
      <div className={classes.social_icons_logo}>
              <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/instagram_logo.png?v=69111395402489423731679307177" alt="test" className={classes.logo} />
            </div>
          </div>
      </Link>
      <Link href="https://www.tiktok.com/@boas.good" target="_blank" className={classes.social_icons_link}>
      <div className={classes.social_icons_fab}> 
      <div className={classes.social_icons_logo}>
            <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/tiktok_logo_new.png?v=28475546769171832871679307177" alt="test" className={classes.logo} />
          </div>
        </div>
      </Link>
      <Link href="https://www.linkedin.com/company/boas-good" target="_blank" className={classes.social_icons_link}>
      <div className={classes.social_icons_fab}> 
      <div className={classes.social_icons_logo}>
            <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/linkedin_logo.png?v=148665479824603558871679307177" alt="test" className={classes.logo} />
          </div>
        </div>
      </Link>

      <Link href="https://open.spotify.com/show/58n1Z5bfAfQDB9xIbzYzHX?si=f204bc31215544e9" target="_blank" className={classes.social_icons_link}>
      <div className={classes.social_icons_fab}> 
      <div className={classes.social_icons_logo}>
            <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/spotify_logo_new.png?v=27010289175530569261679307177" alt="test" className={classes.logo} />
          </div>
        </div>
      </Link>
    </div>


            </div>




            <div className={classes.section}>
    <h3>ABOUT BOAS</h3>
    <ul>
        <li><Link className={classes.link}  href="https://boas.co/pages/mission">Mission</Link></li>
        <li><Link className={classes.link}  href="https://boas.co/pages/sustainability">Sustainability</Link></li>
        <li><Link className={classes.link} href="https://boas.co/a/faq">FAQ</Link></li>
        <li><Link className={classes.link}  href="https://boas.co/pages/contact-us">Contact</Link></li>
        <li><Link className={classes.link}  href="https://boas.co/blogs/nieuws">Blog</Link></li>
      <li><Link className={classes.link}  href="https://boas.co/pages/team">Team</Link></li>
       <li><Link className={classes.link}  href="https://boas.co/pages/careers">Careers</Link></li>
        <li><Link className={classes.link}  href="https://boas.co/pages/shipping-and-returns">Shipping & Returns</Link></li>
    </ul>
</div>


<div className={classes.section_newsletter}>
    <h3>Brands and Press</h3>
    <ul>
        <li><Link className={classes.link} href="https://boas.co/pages/sell">Sell on BOAS</Link></li>
        <li><Link className={classes.link} href="https://boas.co/pages/brands">All Brands</Link></li>
      <li><Link className={classes.link} href="https://boas.co/pages/press">Press</Link></li>
        <li><Link className={classes.link} href="https://boas.co/pages/affiliate">Affiliate Program</Link></li>
    </ul>
    <br/>
    <h3>NEW TO BOAS? </h3>
    <p>Subscribe to our  newsletter to get updates on new offers.</p>
    
    <form method="post" action="/contact#contact_form" accept-charset="UTF-8" className={classes.contact_form}>
        <input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" />
        <input type="email" placeholder="Enter your email address" required value="" className={classes.footer_email} name="contact[email]"/>
        <button type="submit" className={classes.submit_button_footer} href="https://tree-nation.com/profile/impact/boas#co2">Subscribe</button>
    </form>
    </div>
    <br/>

    <div className={classes.payment_methods}>
<h3>Supported Payment Methods<span></span></h3>
<div className={classes.payment_list}>
 
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_deal.png?v=57189021671588529871679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_amazon.png?v=54906662476848016371679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_paypal.png?v=14275536502169800201679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_mastercard.png?v=88842919818796221951679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_klarna.png?v=143107275516104351411679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_visa_image.png?v=54488292528603714521679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_shoppay.png?v=164706647414704945191679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_gpay.png?v=116435065956880442461679307177" alt="logo" />
 <img src="//cdn.shopify.com/s/files/1/0598/2194/9121/t/54/assets/payment_method_amx.png?v=74243363861210880051679307177" alt="logo" />
</div>
</div>
<div className={classes.privacy_and_terms_div}>
<ul className={classes.privacy_and_terms}>
<li><Link className={classes.link} href="https://boas.co/pages/privacy-policy">Privacy Policy&nbsp;&nbsp;&nbsp;</Link>|<Link className={classes.link} href="https://boas.co/pages/terms-conditions">&nbsp;&nbsp;&nbsp;Terms and Conditions</Link></li>
</ul>
<p className={classes.copyright}>Copyright © 2022 BOAS Marketplace</p>

</div>

</div>

<div className={classes.button_row}>
<div className={classes.footer_btm_imgs}>
<Link className={classes.link} href="https://tree-nation.com/profile/impact/boas#co2" target="_blank">
<img alt="footer-btn-img" className={classes.footer_button_img} src="https://tree-nation.com/images/tracking/label-co2-website-black-en.png"/>
</Link>

<Link className={classes.link} href="https://consumerpowerinitiative.org/" target="_blank">
<img   alt="footer-btn-img" className={classes.footer_button_img} src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/White_logo_transparent_background.png"/>
</Link>
</div>
</div>
      </div>
    </>
  );
};

export default Footer;
