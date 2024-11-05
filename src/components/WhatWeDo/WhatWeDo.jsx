import React from 'react'
import './WhatWeDo.css'
import { ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                {/* head */}
                <div className="od-head">
                    <motion.span 
                    variants={tagVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='tag'>
                        What We Offers
                    </motion.span>
                    <motion.span 
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='title
                    '>
                        Effortless innovation, tailored solutions.
                    </motion.span>
                    <motion.span 
                    variants={desVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='text'>
                     Our mission is to empower your digital transformation with cutting-edge technology.
                        <br /> We deliver expert web, mobile, blockchain, and DevOps solutions that are flexible, efficient, and designed to drive your success.
                    </motion.span>
                </div>
                {/* features */}
                <div className="od-features">
                    {
                        ourDiffFeatures.map((feature, i)=> (
                            <motion.div 
                            variants={containerVariants((i + 1) * 0.1)}
                            initial="offscreen"
                            whileInView="onscreen"
                            key={i} className='od-feature'>
                                <Image src={feature.icon} alt="feature" width={50} height={50} />
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo