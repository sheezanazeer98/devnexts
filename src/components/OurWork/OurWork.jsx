import React from "react";
import Slider from "react-slick";
import "./OurWork.css";
import { MdOnlinePrediction } from "react-icons/md";
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '@/src/utils/animation'
import { projectsData } from "@/src/utils/data";

const GRADIENTS = [
  "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "linear-gradient(135deg, #141e30, #243b55)",
  "linear-gradient(135deg, #0d324d, #7f5a83)",
  "linear-gradient(135deg, #232526, #414345)",
  "linear-gradient(135deg, #1e3c72, #2a5298)",
  "linear-gradient(135deg, #0b486b, #f56217)",
  "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  "linear-gradient(135deg, #16222a, #3a6073)",
];

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
      <div className="hiw-head  our-work-head ">
                    <motion.span 
                    variants={tagVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    viewport={{once: true}}
                    className='tag worktag'
                    >
                        Our Works
                    </motion.span>
                    <motion.span 
                    variants={titleVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    viewport={{once: true}}
                    className='title'
                    >
                    These are some of our recent projects
                    </motion.span>
                </div>
        <Slider {...settings} className="all-projects">
          {
              projectsData.map((pro,i)=>(
                  <div className="project-item"  key={i} >
            <div className="project-info">
              <h1>   <a
                    href={pro.projectSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                 {pro.projectTitle}                      
                  </a>  </h1>
              <h2>  {pro.projectSlogan}  </h2>
              <p className="description">
               {pro.projectDescription}
              </p>
              <div className="project-icons">
                {pro.projectSite && 
                <span>
                  <a
                    href={pro.projectSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <MdOnlinePrediction/>
                  </a>
                </span> }
              </div>
            </div>
            <div 
              className="project-logo-panel"
              style={{ background: GRADIENTS[i % GRADIENTS.length] }}
            >
              <span className="project-logo-id">{pro.id}</span>
              <span className="project-logo-title">{pro.projectTitle}</span>
              <span className="project-logo-slogan">{pro.projectSlogan}</span>
            </div>
          </div>
              
              ))
          }

        </Slider>
      </div>
    </section>
  );
};

export default OurWork;