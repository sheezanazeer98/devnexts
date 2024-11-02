import React from "react";
import Slider from "react-slick";
import "./OurWork.css";
// import Project1 from "../../images/keeper.PNG";
// import Project2 from "../../images/tindog.PNG";
import { FaGithub } from 'react-icons/fa';
import { MdOnlinePrediction } from "react-icons/md";
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '@/src/utils/animation'


const OurWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="projects">
      <div className="container">
      <div className="hiw-head">
                    <motion.span 
                    variants={tagVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    className='tag'
                    >
                        How it works
                    </motion.span>
                    <motion.span 
                    variants={titleVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    className='title'
                    >
                    These are some of our recent projects
                    </motion.span>
                </div>
        <Slider {...settings} className="all-projects">
          <div className="project-item">
            <div className="project-info">
              <h1>Project 1</h1>
              <h2>TinDog App</h2>
              <p className="description">
                Lorem ipsum dolor sitted ameted consecteturng adipisicing elitted.
                Necessbus cupppiditate modi consequntur explicaboted magnificient
                ameted.
              </p>
              <div className="project-icons">
                <span>
                  <a
                    href="https://tindogg-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <MdOnlinePrediction/>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/iameenalam/TinDog-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                 <FaGithub/>
                  </a>
                </span>
              </div>
            </div>
            <div className="project-img">
              <img src={"https://imageio.forbes.com/specials-images/imageserve/63cbef6da10b5f5f8e6e3ae4/Liquid-shakers-have-provided-investors-with-a-way-to-earn-passive-income-while/1960x0.jpg?format=jpg&width=960"} alt="TinDog" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h1>Project 2</h1>
              <h2>Keeper App</h2>
              <p className="description">
                Lorem ipsum dolor sitted ameted consecteturng adipisicing elitted.
                Necessbus cupppiditate modi consequntur explicaboted magnificient
                ameted.
              </p>
              <div className="project-icons">
                <span>
                  <a
                    href="https://ameenz-keeper-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-earth-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/iameenalam/Keeper-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="project-img">
              {/* <img src={Project1} alt="Keeper App" /> */}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurWork;