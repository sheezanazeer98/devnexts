import React from 'react'
import './WhatWeDo.css'
import { ourDiffFeatures } from '@/src/utils/data'
import { FaMobileAlt, FaCubes, FaCloud, FaGlobe, FaBrain, FaInfinity, FaBullhorn, FaFileInvoiceDollar } from 'react-icons/fa'

const iconMap = {
  FaMobileAlt, FaCubes, FaCloud, FaGlobe, FaBrain, FaInfinity, FaBullhorn, FaFileInvoiceDollar,
}

const WhatWeDo = () => {
  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                <div className="od-head">
                    <span className='tag'>
                        What We Offers
                    </span>
                    <span className='title'>
                        Effortless innovation, tailored solutions.
                    </span>
                    <span className='text'>
                     Our mission is to empower your digital transformation with cutting-edge technology.
                        <br /> We deliver expert web, mobile, blockchain, and DevOps solutions that are flexible, efficient, and designed to drive your success.
                    </span>
                </div>
                <div className="od-features">
                    {
                        ourDiffFeatures.slice(0, 4).map((feature, i)=> {
                            const Icon = iconMap[feature.iconName]
                            return (
                            <div key={i} className='od-feature'>
                                <div className="od-icon-badge">
                                    <Icon />
                                </div>
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="od-features">
                    {
                        ourDiffFeatures.slice(4, 8).map((feature, i)=> {
                            const Icon = iconMap[feature.iconName]
                            return (
                            <div key={i} className='od-feature'>
                                <div className="od-icon-badge">
                                    <Icon />
                                </div>
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo
