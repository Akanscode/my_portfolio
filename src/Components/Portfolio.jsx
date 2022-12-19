import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { portfolio } from "/src/Components/Data";
const Portfolio = () => {
  return (
    <section id="project" className="container mx-auto">
      <div className="py-8 md:py-16">
        <div className="flex flex-col items-center justify-center ">
          <h5 className="text-[16px] md:text-[20px]  text-black font-semibold font-mono">
            Recent Work
          </h5>
          <h2 className="text-[32px] md:text-[60px] font-bold capitalize text-[#835a31] font-mono">
            projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((val, id) => (
            <div key={id} className="flex flex-col bg-white shadow-lg">
              <div className="p-3">
                <img
                  src={val.cover}
                  alt={val.alt}
                  className="h-auto w-auto rounded-md shadow-sm"
                />
              </div>
              <div className="p-4">
                <p className="text-[16px] md:text-[18px] font-mono tracking-wide">
                  {val.text}
                </p>
                <div className="flex space-x-2 items-center justify-between px-4 py-4">
                  {val.stack.map((stacks, id) => (
                    <div key={id}>
                      <img
                        src={stacks.stackimg}
                        className="rounded-full h-6 w-6 "
                        alt={stacks.alt}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a href={val.url}>
                    <FaGithub className="h-8 w-8 hover:text-[#835a31]" />
                  </a>
                  <a
                    href={val.url1}
                    className="flex items-center space-x-2 bg-[#835a31] px-4 py-2 hover:text-[#a7a39f] text-black "
                  >
                    <span className=" ">Live</span>
                    <FaEye className="h-4 w-4 " />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
