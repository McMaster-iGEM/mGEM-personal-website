import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Title from "../components/Title";

export default function Projects() {
    const wikis = [
        {
            title: "/2023.igem.wiki/mcmaster-canada",
            href: "https://2023.igem.wiki/mcmaster-canada/",
            heading: "insert project name",
            description: "insert project description",
            image: "/placeholderimage.png"
        },
        {
            title: "/2022.igem.wiki/mcmaster-canada",
            href: "https://2022.igem.wiki/mcmaster-canada/",
            heading: "insert project name",
            description: "insert project description",
            image: "/placeholderimage.png"
        }
    ];

    return (
        <div>
            <Title text = "projects" />
            <div className="flex flex-wrap justify-center items-center gap-8">
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
        </div>
    );
}
