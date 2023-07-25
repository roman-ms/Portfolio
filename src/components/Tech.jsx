import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {socials.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <a href={technology.link} target="_blank" rel="noopener noreferrer">
            <BallCanvas isMobile={true} icon={technology.model} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");