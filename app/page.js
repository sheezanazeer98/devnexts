"use client"

import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import OurValues from '@/src/components/OurValues/OurValues';
import { motion, useAnimation } from 'framer-motion';
import HowItWorks from '@/src/components/HowItWorks/HowItWorks';
import WhoWeInvest from '@/src/components/WhoWeInvest/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
import OurWork from '@/src/components/OurWork/OurWork';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';

export default function Home() {

  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
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
      viewport={{amount: 0.4}}
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
      viewport={{amount: 0.4}}
      >
        <WhoWeInvest />
      <OurWork/>
      </motion.div>
      <Testimonials />

      <Footer />
    </motion.div>
  );
}
