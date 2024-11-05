"use client";

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import {
  FaUsers,
  FaStar,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const OurValues = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* head of section */}
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Our Values
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              {" "}
              Empowering Ideas, Enabling Success
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
            Here’s How We Make a Difference
            </motion.span>
          </div>

          {/* two blocks */}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="wwd-block">
              <div className="block-features">
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((1 + 1) * 0.1)}
                  className="block-feature"
                >
                  <span>
                    {" "}
                    <FaCalendarAlt size={30} />{" "}
                  </span>
                  <span>7+ </span>
                  <span> Years of Experience</span>
                </motion.div>

                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((1 + 1) * 0.1)}
                  className="block-feature"
                >
                  <span>
                    {" "}
                    <FaUsers size={30} />{" "}
                  </span>
                  <span>30+ </span> <span> Team <br/> Members</span>
                </motion.div>
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((1 + 1) * 0.1)}
                  className="block-feature"
                >
                  <span>
                    {" "}
                    <FaCheckCircle size={30} />{" "}
                  </span>
                  <span>150+ </span> <span> Projects Completed</span>
                </motion.div>
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((1 + 1) * 0.1)}
                  className="block-feature"
                >
                  <span>
                    {" "}
                    <FaStar size={30} />{" "}
                  </span>
                  <span>High </span> <span> Client Satisfaction</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
