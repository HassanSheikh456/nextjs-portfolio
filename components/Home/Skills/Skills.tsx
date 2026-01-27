"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    level: 89,
    icon: <SiJavascript />,
  },
  {
    name: "React Js",
    level: 92,
    icon: <SiReact />,
  },
  {
    name: "Next.Js",
    level: 90,
    icon: <SiNextdotjs />,
  },
  {
    name: "Node.Js",
    level: 88,
    icon: <SiNodedotjs />,
  },
  {
    name: "Tailwind CSS",
    level: 94,
    icon: <SiTailwindcss />,
  },
  {
    name: "typescript",
    level: 86,
    icon: <SiTypescript />,
  },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skill</span>
      </h1>
      <div className="flex justify-center gap-6 mt-16 flex-wrap">
        {skills.map((skill, i) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-duration={i * 100}
                data-aos-anchor-placement="top-center"
                className="flex flex-col text-center items-center justify-center 
                 bg-[#14134145] w-40 h-48 rounded-3xl shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-purple-400 mt-1">{skill.name}</p>
                <p className="text-2xl font-semibold">Level: {skill.level}%</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
