import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';
import { Link } from 'react-router-dom';

const HeroSubSection = () => {
    const words = [
        {
          text: "sythetic",
        },
        {
          text: "biology",
        },
        {
          text: "solutions",
        },
        {
          text: "to",
        },
        {
          text: "big problems.",
          className: "text-red-800 ",
        },
      ];
    return (
      <div className = "m-16">
        <Button>
          <div className="flex flex-col items-center justify-center h-[20rem]">
          <p className="text-neutral-600 sm:text-base md:text-2xl lg:3xl xl:4xl ">
            We are an interdisciplinary team of students working to create
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <Link to="/about-us" >
                  <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110">
                      About Us
                  </button>
              </Link>
          </div>
          </div>
        </Button>
      </div>


    );
}

export default HeroSubSection;
