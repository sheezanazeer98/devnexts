import React from 'react'
import './WhoWeInvest.css'
import { whoWeInvest } from '@/src/utils/data'
import { FaHandshake, FaLightbulb, FaUsers, FaTrophy } from 'react-icons/fa'

const valueIcons = [FaHandshake, FaLightbulb, FaUsers, FaTrophy]
const valueColors = ["#0be4d1", "#fee590", "#00c9f7", "#54f3a6"]

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
        <div className="container">
            <div className="wwi-container">
                <div className="wwi-left">
                    <div className="head">
                        <span className='tag'>
                            Who we invest in
                        </span>
                        <span className='title'>
                            {" "}
                            Values That Drive 
                            <br /> Us Forward
                        </span>
                    </div>

                    <div className="wwi-features">
                        {
                            whoWeInvest.map((feature,i) => (
                                <div className='wwi-feature' key={i}>
                                    <span className='des'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="wwi-right">
                    <div className="values-visual">
                        <div className="values-watermark">VALUES</div>
                        <div className="values-grid">
                            {whoWeInvest.map((val, i) => {
                                const Icon = valueIcons[i]
                                return (
                                    <div
                                        key={i}
                                        className="value-card"
                                    >
                                        <div className="value-card-icon" style={{ color: valueColors[i] }}>
                                            <Icon />
                                        </div>
                                        <span className="value-card-title">{val.title}</span>
                                    </div>
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
