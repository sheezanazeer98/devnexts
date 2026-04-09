import React from 'react'
import './HowItWorks.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '@/src/utils/animation'

const HowItWorks = () => {

    const featureVariants = {
        offscreen: {
            scale: 0.9,
            opacity: 0,
        },
        onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.4,
                ease: "easeOut",
            },
        },
    }

  return (
    <div className="hiw-wrapper">
        <div className="container">
            <div className="hiw-container">
                {/* head */}
                <div className="hiw-head">
                    <motion.span 
                    variants={tagVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    viewport={{once: true}}
                    className='tag'
                    >
                        How it works
                    </motion.span>
                    <motion.span 
                    variants={titleVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    viewport={{once: true}}
                    className='title'
                    >
                    Empowering your growth journey through seamless, strategic phases.
                    </motion.span>
                </div>
                {/* features */}
                <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i)=> (
                            <motion.div 
                            variants={featureVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            viewport={{once: true}}
                            className='hiw-feature' 
                            key={i}>
                                {/* left side */}
                                <motion.div 
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: 'tween',
                                        ease: 'easeOut',
                                        duration: 0.5,
                                        delay: .2
                                    }
                                }}
                                viewport={{once: true}}
                                className="detail"
                                >
                                    <span className='des'>0{i+1}</span>
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </motion.div>

                                {/* right side */}
                                <div className="icon">
                                    <Image 
                                    src={feature.icon} 
                                    width={80} 
                                    height={80} 
                                    alt='feature' 
                                    style={{translate: "50% 0rem"}}
                                    />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks