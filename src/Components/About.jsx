import React from "react";
import myImage from "../assets/myImage.jpg";
import { experience, educational, Skills } from "/src/Components/Data.jsx";
import { useState } from "react";

const About = () => {
  const [toggleState, setToggleState] = useState(3);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="about" className="container mx-auto py-6 md:py-16">
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-[16px] md:text-[20px]  text-black font-semibold font-mono">
          Get to know
        </h5>
        <h2 className="text-[32px] md:text-[60px] font-bold capitalize text-[#835a31]  font-mono">
          About Me
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 mt-10">
        <div className="w-full grid items-center rounded-md shadow-md">
          <div className=" overflow-hidden w-full rounded-xl">
            <img
              src={myImage}
              alt="ajeleyeOjo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="mb-[2rem] flex flex-row flex-wrap items-center justify-center  space-x-4">
            <span
              className={toggleState === 1 ? "active_tab " : " tab_btn"}
              onClick={() => toggleTab(1)}
            >
              Education
            </span>
            <span
              className={toggleState === 2 ? "active_tab " : "tab_btn"}
              onClick={() => toggleTab(2)}
            >
              Experience
            </span>
            <span
              className={toggleState === 3 ? "active_tab " : " tab_btn"}
              onClick={() => toggleTab(3)}
            >
              Skills
            </span>
          </div>
          <div className="about__tabs-contents">
            <article className={toggleState === 1 ? "flex" : " hidden"}>
              <div className="content mt-6">
                <div className="flex flex-col md:flex-row relative border-l border-gray-700">
                  <div className="mb-10 ml-4">
                    {educational.map((val, id) => (
                      <div key={id}>
                        <div className="flex flex-wrap space-x-5 flex-row items-center justify-start text-xs md:text-sm">
                          <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black" />
                          <span className="inline-block px-2 py-1 font-semibold text-white bg-black font-mono capitalize rounded-md">
                            {val.course}
                          </span>
                          <h3 className="text-lg font-semibold font-mono text-[#835a31]">
                            {val.schoolName}
                          </h3>
                        </div>
                        <p className="font-bold font-mono text-[12px] md:text-[16px]">
                          {val.year}
                        </p>
                        <p className="text-black font-mono max-w-md">
                          {val.Summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className={toggleState === 2 ? "flex" : "hidden"}>
              <div className="content">
                <div className="content__one">
                  <div className="flex flex-col md:flex-row relative border-l border-gray-700">
                    <div className="mb-10 ml-4">
                      {experience.map((val, id) => (
                        <div key={id}>
                          <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm pt-4">
                            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black" />
                            <span className="inline-block px-2 py-1 font-semibold text-white bg-black font-mono capitalize rounded-md">
                              {val.workrole}
                            </span>
                            <h3 className="text-lg font-semibold text-[#835a31] font-mono">
                              {val.duration}
                            </h3>
                          </div>
                          <p className="font-bold font-mono text-[12px] md:text-[16px]">
                            Responsibility:
                          </p>
                          {val.activities.map((task, id) => (
                            <div key={id}>
                              <ul className="list-outside list-disc text-left text-black font-mono text-sm">
                                <li>{task.list}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className={toggleState === 3 ? "flex" : "hidden"}>
              <div className="content">
                <div className="w-full">
                  <div className="py-6">
                    <h4 className="text-center text-[16px] md:text-[20px] font-bold font-mono text-black">
                      My favorite skills
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {Skills.map((val, id) => (
                      <div
                        key={id}
                        className="p-4 flex flex-col space-y-2 items-center justify-center"
                      >
                        <div className="bg-white shadow-lg p-2">
                          <img
                            src={val.cover}
                            alt={val.alt}
                            className="w-[100px] h-[100px]"
                          />
                        </div>
                        <p className="font-mono text-black text-[12px] md:text-[14px]">
                          {val.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
