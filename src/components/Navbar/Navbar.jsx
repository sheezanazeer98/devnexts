"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky");
        } else {
            setNavStyle("")
        }
    })

  return (
    <div className={`n-wrapper ${navStyle}`}>
        {/* desktop version */}
        <div className="container">
            <div className="n-container">
                {/* left side */}
                <div className="n-logo">
                    <img src="/logo2.png" alt="logo"   width= {130} height = {80} />
                </div>

                {/* right side */}
                <div className="n-right">
                    <div className="n-menu">
                        <Link to="wwd-wrapper" spy={true} smooth={true} >
                        <span>Our Values</span>
                        </Link>
                        <Link to="od-wrapper" spy smooth offset={100} >
                        <span>What we do</span>
                        </Link>
                        <Link to="hiw-wrapper" spy smooth >
                            <span>How it works</span>
                        </Link>
                        <Link to="projects" spy smooth offset={100} >
                            <span>Our Projects</span>
                        </Link>
                    </div>
                    <div className="fund-button">
                    <a href="mailto:contact@devnexts.com?subject=IT%20Company%20Inquiry%20-%20Starting%20a%20Project">Start Project</a>
                    </div>
                </div>
            </div>
        </div>

        {/* mobile version */}
        <div className="nm-container">
            {/* logo */}
            <img src="/logo2.png" alt="logo"   width= {80} height = {50} />

            {/* menu icon */}
            {
                !mobileMenuOpened ? 
                <BiMenuAltRight
                size={30}
                onClick={() => setMobileMenuOpened(true)} 
                /> : 
                <RxCross2 
                size={30}
                onClick={() => setMobileMenuOpened(false)}
                />
            }

            {/* mobile menu */}
            <div className="nm-menu"
            style={{transform: mobileMenuOpened && "translateX(0%)"}}
            >
                        <Link to="wwd-wrapper"       onClick={() => setMobileMenuOpened(false)}spy={true} smooth={true} >
                        <span>Our Values</span>
                        </Link>
                        <Link to="od-wrapper"         onClick={() => setMobileMenuOpened(false)} spy smooth offset={100} >
                        <span>What we do</span>
                        </Link>
                        <Link to="hiw-wrapper"        onClick={() => setMobileMenuOpened(false)}  spy smooth >
                            <span>How it works</span>
                        </Link>
                        <Link to="projects" spy        onClick={() => setMobileMenuOpened(false)}  smooth offset={100} >
                            <span>Our Projects</span>
                        </Link>
                <div className="m-funded-button">
                <a href="mailto:contact@devnexts.com?subject=IT%20Company%20Inquiry%20-%20Starting%20a%20Project">Start Project</a>
                {/* Start Project */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar