import React, { useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image'; 

const Navbar = ({openModal}) => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky");
        } else {
            setNavStyle("");
        }
    });

    return (
        <div className={`n-wrapper ${navStyle}`}>
            {/* desktop version */}
            <div className="container">
                <div className="n-container">
                    {/* left side */}
                    <div className="n-logo">
                        {/* Use next/image component for optimized images */}
                        <Link to="h-wrapper" spy={true} smooth={true}>
                        <Image src="/logo2.png" alt="logo" width={130} height={80} priority />
                        </Link>
                    </div>

                    {/* right side */}
                    <div className="n-right">
                        <div className="n-menu">
                            <Link to="wwd-wrapper" spy={true} smooth={true}>
                                <span>Our Values</span>
                            </Link>
                            <Link to="od-wrapper" spy smooth offset={100}>
                                <span>What we Offers</span>
                            </Link>
                            <Link to="hiw-wrapper" spy smooth>
                                <span>How it works</span>
                            </Link>
                            <Link to="projects" spy smooth offset={100}>
                                <span>Our Projects</span>
                            </Link>
                        </div>
            
                        <div className="fund-button" onClick = {()=>{openModal()}} >
                       Start Project
                        </div>
              
                    </div>
                </div>
            </div>

            {/* mobile version */}
            <div className="nm-container">
                {/* logo */}
          
                <Link to="h-wrapper" spy={true} smooth={true}>   <Image src="/logo2.png" alt="logo" width={80} height={50} priority /> </Link>
               
                {/* menu icon */}
                {!mobileMenuOpened ? (
                    <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
                ) : (
                    <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
                )}

                {/* mobile menu */}
                <div
                    className="nm-menu"
                    style={{ transform: mobileMenuOpened && "translateX(0%)" }}
                >
                    <Link to="wwd-wrapper" onClick={() => setMobileMenuOpened(false)} spy={true} smooth={true}>
                        <span>Our Values</span>
                    </Link>
                    <Link to="od-wrapper" onClick={() => setMobileMenuOpened(false)} spy smooth offset={100}>
                        <span>What we Offers</span>
                    </Link>
                    <Link to="hiw-wrapper" onClick={() => setMobileMenuOpened(false)} spy smooth>
                        <span>How it works</span>
                    </Link>
                    <Link to="projects" onClick={() => setMobileMenuOpened(false)} spy smooth offset={100}>
                        <span>Our Projects</span>
                    </Link>
                    <div className="m-funded-button"  onClick = {()=>{openModal()}}  >
                       Start Project
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
