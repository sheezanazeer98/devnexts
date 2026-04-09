"use client"

import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import { motion, useAnimation } from 'framer-motion';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandingVideo = dynamic(() => import('@/src/components/BrandingVideo/BrandingVideo'), { ssr: false });
const OurValues = dynamic(() => import('@/src/components/OurValues/OurValues'));
const HowItWorks = dynamic(() => import('@/src/components/HowItWorks/HowItWorks'));
const WhoWeInvest = dynamic(() => import('@/src/components/WhoWeInvest/WhoWeInvest'));
const Testimonials = dynamic(() => import('@/src/components/Testimonials/Testimonials'));
const Footer = dynamic(() => import('@/src/components/Footer/Footer'));
const OurWork = dynamic(() => import('@/src/components/OurWork/OurWork'));
const WhatWeDo = dynamic(() => import('@/src/components/WhatWeDo/WhatWeDo'));
const Modal = dynamic(() => import('@/src/components/Modal/Modal'), { ssr: false });
const ToastContainer = dynamic(() => import('react-toastify').then(mod => ({ default: mod.ToastContainer })), { ssr: false });

export default function Home() {

  const [open, setOpen] = useState(false);
  const [toastLoaded, setToastLoaded] = useState(false);

  const controls = useAnimation()

  const setModal = useCallback(()=>{
    setOpen(true);
    if (!toastLoaded) {
      import('react-toastify/dist/ReactToastify.css');
      setToastLoaded(true);
    }
  }, [toastLoaded]);

  return (
    <motion.div className="app" animate={controls}>
      <Navbar  openModal = {setModal}   />
      <Hero  openModal = {setModal}   />
      <BrandingVideo />
      <OurValues />
      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--secondary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.05}}
      >
        <WhatWeDo />
      </motion.div>
      <HowItWorks />

      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--secondary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.05}}
      >
        <WhoWeInvest />
      <OurWork/>
      </motion.div>
      <Testimonials />

      <Footer   openModal = {setModal}  />

      {open && <Modal status={open} onClose={() => setOpen(false)} />}
      {toastLoaded && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </motion.div>
  );
}
