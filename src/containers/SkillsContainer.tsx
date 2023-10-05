import React from "react";
import { ReactComponent as Illustration } from "../assets/skills.svg";
import Heading from "../components/Heading";
import { SECTIONS, skills } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const SkillsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6 ">
      <Heading
        heading={SECTIONS[3]}
        id="skills"
        // illustration={<Illustration className=" max-h-48" />}
      />
       <p className="text-sm text-slate-500">
      Free shipping on all continental US orders.
    </p>
      <div className="grid gap-3 mt-2 lg:grid-cols-4 justify-items-center auto-rows-fr">
        {skills.map(({ id, skill, img, level }) => (
          <AnimateVisible key={id}>
            <div
             
            >
              <img 
            src={img}
            alt={skill}
            className="w-24 h-24"
          />
              <h3>{skill}</h3>
              {/* <progress
                className={`progress ${
                  id % 2 === 0 ? `progress-primary` : `progress-secondary`
                }`}
                value={level}
                max="100"
              /> */}
            </div>
          </AnimateVisible>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
