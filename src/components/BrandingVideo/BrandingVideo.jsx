"use client"

import React, { useRef, useEffect, useState } from 'react'
import './BrandingVideo.css'
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaEthereum, FaPython,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiSolidity, SiKubernetes,
} from 'react-icons/si'

const techBadges = [
  { icon: FaReact,       label: 'React',       x: '8%',  y: '18%', delay: 0 },
  { icon: SiNextdotjs,   label: 'Next.js',     x: '72%', y: '12%', delay: 1 },
  { icon: FaNodeJs,      label: 'Node.js',     x: '18%', y: '72%', delay: 2 },
  { icon: SiTypescript,  label: 'TypeScript',   x: '78%', y: '68%', delay: 3 },
  { icon: FaAws,         label: 'AWS',         x: '48%', y: '78%', delay: 4 },
  { icon: FaDocker,      label: 'Docker',      x: '85%', y: '40%', delay: 5 },
  { icon: FaEthereum,    label: 'Ethereum',    x: '5%',  y: '45%', delay: 6 },
  { icon: FaPython,      label: 'Python',      x: '35%', y: '10%', delay: 7 },
  { icon: SiSolidity,    label: 'Solidity',    x: '60%', y: '82%', delay: 8 },
  { icon: SiKubernetes,  label: 'Kubernetes',  x: '90%', y: '82%', delay: 9 },
]

const codeLines = [
  'const app = createNextApp();',
  'await deployToCloud(config);',
  'blockchain.mint({ token, owner });',
  'ai.predict(data).then(render);',
]

const TypewriterLine = ({ text, delay }) => {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <div className="bv-code-line bv-code-visible">
      <span className="bv-prompt">&gt;</span> {displayed}
      {started && displayed.length < text.length && <span className="bv-cursor">|</span>}
    </div>
  )
}

const BrandingVideo = () => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const progress = Math.min(1, Math.max(0, 1 - rect.top / vh))
        const scale = 0.85 + progress * 0.15
        el.style.transform = `scale(${scale})`
        ticking = false
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          window.addEventListener('scroll', onScroll, { passive: true })
          onScroll()
        } else {
          window.removeEventListener('scroll', onScroll)
        }
      },
      { threshold: 0 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="bv-container">
      <div className="container">
        <div ref={ref} className="bv-showcase">
          <div className="bv-orb bv-orb-1" />
          <div className="bv-orb bv-orb-2" />
          <div className="bv-orb bv-orb-3" />

          <div className="bv-center">
            <span className="bv-tagline">We Engineer</span>
            <h2 className="bv-headline">Digital Excellence</h2>
            <p className="bv-sub">
              Full-stack &middot; Blockchain &middot; AI &middot; Cloud
            </p>
          </div>

          <div className="bv-terminal">
            {inView && codeLines.map((line, i) => (
              <TypewriterLine key={i} text={line} delay={600 + i * 400} />
            ))}
          </div>

          {techBadges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div
                key={i}
                className={`bv-badge ${inView ? 'bv-badge-in' : ''}`}
                style={{
                  left: badge.x,
                  top: badge.y,
                  animationDelay: `${badge.delay * 0.12}s`,
                }}
              >
                <Icon className="bv-badge-icon" />
                <span className="bv-badge-label">{badge.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BrandingVideo
