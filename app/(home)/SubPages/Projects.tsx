import React from "react";
import { PinContainer } from "../components/ui/pin";

export default function Projects() {
  const projects = [
    {
      href: "https://2023.igem.wiki/mcmaster-canada/",
      heading: "2023 Project",
      description: "insert project description",
      image: "/black_screen.png"
    },
    {
      href: "https://2022.igem.wiki/mcmaster-canada/",
      heading: "2022 Project",
      description: "insert project description",
      image: "/black_screen.png"
    },
    {
      href: "https://www.frontiersin.org/articles/10.3389/fsysb.2023.1274184/full",
      heading: "Publication",
      description: "HYPOTHESIS AND THEORY article",
      image: "/black_screen.png"
    }
  ];

  return (
    <div className="max-w-7xl py-10 mx-auto max-h-full px-5">
      <div className="text-4xl font-bold text-left mt-32">
        CURRENT PROJECTS
      </div>
      <hr />
      <div className="text-4xl font-bold text-left mt-14 mb-5">
        HP INITIATIVES & STORYBOOK
      </div>
      <hr />
      <div className="text-4xl font-bold text-left mt-14">
        PAST PROJECTS
      </div>
      <hr />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
        {projects.map((project, index) => (
          <PinContainer
            key={index}
            href={project.href}
            className="flex flex-col p-4 tracking-tight text-slate-700/50 border border-gray-300 rounded w-full"
          >
            <h3 className="pb-2 m-0 font-bold text-base text-slate-800">
              {project.heading}
            </h3>
            <hr />
            <div className="text-base m-0 p-2 font-normal">
              <span className="text-slate-700">
                {project.description}
              </span>
            </div>
            <img
              src={project.image}
              alt={project.heading}
              className="w-full rounded-lg mt-4"
            />
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
