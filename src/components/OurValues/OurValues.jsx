"use client";

import React from "react";
import "./WhatWeDo.css";
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
          <div className="wwd-head">
            <span className="tag">
              Our Values
            </span>
            <span className="title">
              {" "}
              Empowering Ideas, Enabling Success
            </span>
            <span className="des">
            Here&apos;s How We Make a Difference
            </span>
          </div>

          <div className="wwd-blocks">
            <div className="wwd-block">
              <div className="block-features">
                <div className="block-feature">
                  <span>
                    {" "}
                    <FaCalendarAlt size={30} />{" "}
                  </span>
                  <span>7+ </span>
                  <span> Years of Experience</span>
                </div>

                <div className="block-feature">
                  <span>
                    {" "}
                    <FaUsers size={30} />{" "}
                  </span>
                  <span>30+ </span> <span> Team <br/> Members</span>
                </div>
                <div className="block-feature">
                  <span>
                    {" "}
                    <FaCheckCircle size={30} />{" "}
                  </span>
                  <span>150+ </span> <span> Projects Completed</span>
                </div>
                <div className="block-feature">
                  <span>
                    {" "}
                    <FaStar size={30} />{" "}
                  </span>
                  <span>High </span> <span> Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
