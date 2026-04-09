import React from 'react'
import './HowItWorks.css'
import { hitFeatures } from '@/src/utils/data'
import { FaPaintBrush, FaCode, FaTools } from 'react-icons/fa'

const iconMap = { FaPaintBrush, FaCode, FaTools }

const HowItWorks = () => {
  return (
    <div className="hiw-wrapper">
        <div className="container">
            <div className="hiw-container">
                <div className="hiw-head">
                    <span className='tag'>
                        How it works
                    </span>
                    <span className='title'>
                    Empowering your growth journey through seamless, strategic phases.
                    </span>
                </div>
                <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i)=> {
                            const Icon = iconMap[feature.iconName]
                            return (
                            <div className='hiw-feature' key={i}>
                                <div className="detail">
                                    <span className='des'>0{i+1}</span>
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </div>
                                <div className="hiw-icon-badge">
                                    <Icon />
                                </div>
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

export default HowItWorks
