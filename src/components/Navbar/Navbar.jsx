import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';
import Image from 'next/image'; 

const Navbar = ({openModal}) => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const lastStyle = useRef("");

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY > 200;
            const next = scrolled ? "sticky" : "";
            if (next !== lastStyle.current) {
                lastStyle.current = next;
                setNavStyle(next);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`n-wrapper ${navStyle}`}>
            <div className="container">
                <div className="n-container">
                    <div className="n-logo">
                        <Link to="h-wrapper" spy={true} smooth={true}>
                        <Image src="/logo.png" alt="logo" width={130} height={100} priority />
                        </Link>
                    </div>

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
            
                        <div className="fund-button" onClick={() => openModal()}>
                       Schedule Consultation
                        </div>
              
                    </div>
                </div>
            </div>

            <div className="nm-container">
                <Link to="h-wrapper" spy={true} smooth={true}>
                    <Image src="/logo.png" alt="logo" width={80} height={62} priority />
                </Link>
               
                {!mobileMenuOpened ? (
                    <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
                ) : (
                    <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
                )}

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
                    <div className="m-funded-button" onClick={() => openModal()}>
                       Schedule Consultation
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
