import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';
import { Link } from 'react-router-dom';

const HeroSubSection = () => {
    const words = [
        {
          text: "blah",
        },
        {
          text: "blah",
        },
        {
          text: "blah",
        },
        {
          text: "blah",
        },
        {
          text: "blah.",
          className: "text-red-800 ",
        },
      ];
    return (
      <Button>
        <div className="flex flex-col items-center justify-center h-[20rem]">
        <p className="text-neutral-600 text-3xl sm:text-4xl  ">
            we are blah blah blah!
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

    );
}

export default HeroSubSection;
