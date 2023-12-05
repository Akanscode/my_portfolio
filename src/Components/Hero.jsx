import React from "react";
//import { HiOutlineEnvelope, HiOutlinePhoneXMark } from "react-icons/hi2";
//import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaTwitter, FaInvision, FaDownload } from "react-icons/fa";
import myImage from "../assets/myImage.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative container mx-auto py-6 md:py-16">
        <div className="">
          <div className="flex justify-between lg:flex-row flex-col-reverse pt-12">
            {/**====== hero text=========== */}
            <div className="flex flex-col space-y-1 lg:w-1/2  w-full  pt-10 ">
              <button className="bg-[#835a31] px-2 py-2 w-[100px] font-bold text-white shadow-lg outline-none rounded rounded-tr-3xl rounded-bl-3xl">
                Hello I'M
              </button>
              <h1 className="header-text">nurudeen Ajeleye</h1>
              <h1 className="header-text ">ojo</h1>
              <h4 className=" capitalize font-bold text-xl md:text-4xl text-[#835a31]">
                Frontend Engineer
              </h4>
              <p className="font-semibold text-[14px] md:text-[18px] text-black max-w-lg">
                I'm a front-end developer in Nigeria, and I have {""}
                <span className="text-[#835a31] font-bold text-[20px] capitalize px-1">
                  2 years
                </span>
                {""}
                experience into my web development journey.
                <br /> If you're hiring a front-end developer or need a website
                built, get in touch!
              </p>
              <div className=" fixed xl:left-16 left-3 bottom-60 mx-0 flex flex-col space-y-5 max-h-0  ">
                <a href={`https://twitter.com/SpikeHub_`}>
                  <span className="social-icon">
                    <FaTwitter size={15} />
                  </span>
                </a>
                <a href={`https://github.com/Akanscode`}>
                  <span className="social-icon">
                    <FaGithub size={15} />
                  </span>
                </a>
                <a href={`https://www.linkedin.com/in/ajeleyeojo/`}>
                  <span className="social-icon">
                    <FaInvision size={15} />
                  </span>
                </a>
              </div>
              <div className="flex space-x-5 ">
                <a
                  target="_blank"
                  href={`https://docs.google.com/document/d/1ASvOUdjkqk5vt1DG-sgLjdyDL6pjNm7FVKnd2c5dhsk/edit?usp=sharing`}
                >
                  <button className="mt-4 text-[14px] md:text-[18px] font-bold border border-[#835a31] text-[#835a31] rounded-full px-2 md:px-4 py-3 cursor-pointer ">
                    <span className=" flex items-center justify-center space-x-5">
                      Download CV
                      <FaDownload size={15} />
                    </span>
                  </button>
                </a>
                <a href="#contact">
                  <button className="mt-4 text-[14px] md:text-[18px] bg-[#cab39c] text-black rounded-full px-2 md:px-4 py-3 ">
                    Hire Me
                  </button>
                </a>
              </div>
            </div>

            <div className=" lg:w-1/2 w-full md:mb-0 px-10">
              <img
                className=" object-cover rounded-full h-auto w-auto ring-[20px] ring-[#cab39c]/30 ring-offset-[20px] ring-offset-slate-200 animate__animated animate__zoomIn"
                src={myImage}
                alt="Your Name Here"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
