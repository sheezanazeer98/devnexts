import React from 'react'
import './WhoWeInvest.css'
import { whoWeInvest } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation'
import { FaHandshake, FaLightbulb, FaUsers, FaTrophy } from 'react-icons/fa'

const valueIcons = [FaHandshake, FaLightbulb, FaUsers, FaTrophy]
const valueColors = ["#0be4d1", "#fee590", "#00c9f7", "#54f3a6"]

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
        <div className="container">
            <div className="wwi-container">
                {/* left side */}
                <div className="wwi-left">
                    <div className="head">
                        <motion.span 
                        variants={tagVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        viewport={{once: true}}
                        className='tag'>
                            Who we invest in
                        </motion.span>
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        viewport={{once: true}}
                        className='title'>
                            {" "}
                            Values That Drive 
                            <br /> Us Forward
                        </motion.span>
                    </div>

                    {/* features */}
                    <div className="wwi-features">
                        {
                            whoWeInvest.map((feature,i) => (
                                <motion.div 
                                variants={containerVariants(i * 0.05)}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                viewport={{once: true}}
                                className='wwi-feature' key={i}>
                                    <span className='des'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                {/* right side — floating value cards */}
                <div className="wwi-right">
                    <div className="values-visual">
                        <div className="values-watermark">VALUES</div>
                        <div className="values-grid">
                            {whoWeInvest.map((val, i) => {
                                const Icon = valueIcons[i]
                                return (
                                    <motion.div
                                        key={i}
                                        className="value-card"
                                        variants={containerVariants(i * 0.08 + 0.1)}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{once: true}}
                                    >
                                        <div className="value-card-icon" style={{ color: valueColors[i] }}>
                                            <Icon />
                                        </div>
                                        <span className="value-card-title">{val.title}</span>
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div className="values-tagline">Built on principles that matter</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeInvest
