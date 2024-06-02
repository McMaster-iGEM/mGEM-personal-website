import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Title from "../components/Subtitle";

export default function Projects() {
    const projects = [
        {
            title: "/2023.igem.wiki/mcmaster-canada",
            href: "https://2023.igem.wiki/mcmaster-canada/",
            heading: "2023 Project",
            description: "insert project description",
            image: "/placeholderimage.png"
        },
        {
            title: "/2022.igem.wiki/mcmaster-canada",
            href: "https://2022.igem.wiki/mcmaster-canada/",
            heading: "2022 Project",
            description: "insert project description",
            image: "/placeholderimage.png"
        },
        {
            title: "/frontiersin.org",
            href: "https://www.frontiersin.org/articles/10.3389/fsysb.2023.1274184/full",
            heading: "Publication",
            description: "HYPOTHESIS AND THEORY article",
            image: "/placeholderimage.png"
        }
    ];



    return (
        <div className="max-w-7xl py-10 mt-16 mx-auto max-h-full px-5">
            <div className="text-4xl font-bold text-left mt-14 mb-5">
                HP INITIATIVES & STORYBOOK
            </div>
            <hr></hr>
            <div className="text-4xl font-bold text-left mt-14">
                PAST PROJECTS
            </div>
            <hr></hr>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 mb-10 gap-y-5 px-4">
                {projects.map((projects, index) => (
                    <a key={index} href={projects.href} target="_blank" rel="noopener noreferrer">
                        <PinContainer
                            title={projects.title}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
                                    {projects.heading}
                                </h3>
                                <div className="text-base m-0 p-0 font-normal">
                                    <span className="text-slate-500">
                                        {projects.description}
                                    </span>
                                </div>
                                <img src={projects.image} alt={projects.heading} className="w-full rounded-lg mt-4" />
                            </div>
                        </PinContainer>
                    </a>
                ))}
            </div>

        </div>
    );
}
