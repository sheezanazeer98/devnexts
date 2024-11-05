import React from "react";
import Slider from "react-slick";
import "./OurWork.css";
// import Project1 from "../../images/keeper.PNG";
// import Project2 from "../../images/tindog.PNG";
import { FaGithub } from 'react-icons/fa';
import { MdOnlinePrediction } from "react-icons/md";
import {motion} from 'framer-motion'
import { tagVariants, titleVariants, containerVariants } from '@/src/utils/animation'
import { projectsData } from "@/src/utils/data";


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
                    className='tag worktag'
                    >
                        Our Works
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
            <div className="project-img">
              <img src={pro.carouselImages[0]} alt="TinDog" />
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