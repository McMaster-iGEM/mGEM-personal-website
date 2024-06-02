import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';

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
            <a href="https://smoggy-kiss-d62.notion.site/dbf17f95b5f0494ea7128708c2113d80?v=992200682315458b9e74e727b1a8b4d7" target="_blank" rel="noopener noreferrer">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110">
                    Join our Newsletter
                    </button>
            </a>
        </div>
        </div>
      </Button>

    );
}

export default HeroSubSection;
