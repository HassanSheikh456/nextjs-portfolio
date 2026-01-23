import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[60%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Word part */}
        <div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold">
            My Word
            <span className="text-cyan-200"> Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard Icon={FaCodepen} role="Full-stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
          </div>
        </div>
        {/* Education part */}
        <div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold">
            My
            <span className="text-cyan-200"> Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={BiBadge}
              role="Design Institute of Technology"
              date="Jan 2021 - Jan 2023"
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelors in Computer Science"
              date="Jan 2025 - Jan 2029"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in Digital Marking"
              date="Jan 2016 - Jan 2021"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
