import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id, illustration }) => {
  return (
    <>
     {/* <div className="grid my-2 mt-2 center lg:grid-cols-2 auto-rows-fr "> */}
      {/* <div className="hidden pt-3 antialiased lg:flex" id={id}>
        {illustration}
      </div> */}
      <div className="pt-3 ml-3 text-5xl md:text-center">{heading}</div>
   {/* </div> */}
    </>
  );
};

export default Heading;
