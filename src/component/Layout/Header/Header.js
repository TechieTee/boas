import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/page-cta");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                                Women
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                            Men
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                                Kids
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                          Baby
                            </Link>
                        </li>
                    
                    </ul>
                
                </nav>
                <Link to="/" className={classes.header__content__logo}>
                  <img src="https://cdn.shopify.com/s/files/1/0598/2194/9121/files/BOAS_Logo_Transparent_180x.png?v=1646145898" alt="logo"/>
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                               About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                            Account
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                             Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                        Language
                            </Link>
                        </li>
                    
                    </ul>
                
                </nav>
              
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>




            <div className={classes.header__content}>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                   
                
                </nav>
            <div className={classes.subheader_content}>
            <marquee className={classes.marquee} behavior="scroll" direction="left" scrollamount="20">
 <span>FREE SHIPPING ON JEANS</span>
  </marquee>
            </div>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                  
                
                </nav>
              
              
            </div>
          
        </header>
    );
};

export default Header;