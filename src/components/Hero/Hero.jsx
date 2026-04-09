"use client"

import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import {motion} from 'framer-motion'
import { FaCode, FaMobileAlt, FaCloud, FaCubes, FaBrain, FaRocket } from 'react-icons/fa'

const pillData = [
  { icon: FaCode,      label: "Web",        bg: "#0be4d1" },
  { icon: FaMobileAlt, label: "Mobile",     bg: "#fde490" },
  { icon: FaCubes,     label: "Blockchain", bg: "#00c9f7" },
  { icon: FaCloud,     label: "Cloud",      bg: "#83cfdf" },
  { icon: FaBrain,     label: "AI / ML",    bg: "#fe8856" },
  { icon: FaRocket,    label: "DevOps",     bg: "#0be4d1" },
]

const Hero = ({openModal}) => {

    const variants = (delay) => ({
        initial: { y: "18rem" },
        animate: {
            y: "0rem",
            transition: { type: "tween", ease: "easeOut", duration: 0.8, delay }
        }
    })

  return (
    <div className="h-wrapper">
        <div className="container">
            <div className="h-container">
                {/* left Side */}
                <div className="h-left">
                    <div className="image-row">
                        {pillData.slice(0, 3).map((pill, i) => (
                            <div className="person-pill" key={i}>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={variants(i * 0.1)}
                                    style={{ backgroundColor: pill.bg }}
                                    className="person-pill-bg"
                                >
                                    <div className="pill-content">
                                        <pill.icon className="pill-icon" />
                                        <span className="pill-label">{pill.label}</span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div className="image-row">
                        {pillData.slice(3, 6).map((pill, i) => (
                            <div className="person-pill" key={i}>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={variants(i * 0.1)}
                                    style={{ backgroundColor: pill.bg }}
                                    className="person-pill-bg"
                                >
                                    <div className="pill-content">
                                        <pill.icon className="pill-icon" />
                                        <span className="pill-label">{pill.label}</span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* right Side */}
                <div className="h-right">
                    <div className="h-title">
                        <span> Empowering Digital Transformation  </span>
                    </div>

                    <div className="h-description">
                    Delivering innovative, scalable software tailored to meet the unique needs of businesses in any industry.
                    </div>
                    <EmailBox openModal={openModal} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
