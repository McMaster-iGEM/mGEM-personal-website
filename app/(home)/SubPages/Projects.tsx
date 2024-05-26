import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Title from "../components/Title";

export default function Projects() {
    const wikis = [
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
        }
    ];

    const publications = [
        {
            title: "/frontiersin.org",
            href: "https://www.frontiersin.org/articles/10.3389/fsysb.2023.1274184/full",
            heading: "HYPOTHESIS AND THEORY article",
            description: "An ingestible biosensor",
            image: "/placeholderimage.png"
        }
    ]

    return (
        <div className="py-5 p-5 mt-16 z-0">
            <Title text = "PROJECTS" className="flex flex-col items-center justify-center" />
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-2 px-4 mb-14">
                {wikis.map((wiki, index) => (
                    <a key={index} href={wiki.href} target="_blank" rel="noopener noreferrer">
                        <PinContainer
                            title={wiki.title}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
                                    {wiki.heading}
                                </h3>
                                <div className="text-base m-0 p-0 font-normal">
                                    <span className="text-slate-500">
                                        {wiki.description}
                                    </span>
                                </div>
                                <img src={wiki.image} alt={wiki.heading} className="w-full rounded-lg mt-4" />
                            </div>
                        </PinContainer>
                    </a>
                ))}
            </div>
            <Title text = "PUBLICATIONS" className="flex flex-col items-center justify-center" />
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-2 px-4 mb-14">
                {publications.map((publications, index) => (
                    <a key={index} href={publications.href} target="_blank" rel="noopener noreferrer">
                        <PinContainer
                            title={publications.title}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
                                    {publications.heading}
                                </h3>
                                <div className="text-base m-0 p-0 font-normal">
                                    <span className="text-slate-500">
                                        {publications.description}
                                    </span>
                                </div>
                                <img src={publications.image} alt={publications.heading} className="w-full rounded-lg mt-4" />
                            </div>
                        </PinContainer>
                    </a>
                ))}
            </div>
        </div>
    );
}
