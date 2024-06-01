import React from 'react';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from './ui/direction-aware-hover';

const Members = () => {
    const pres = [
        {
            name: "Andrew Chami",
            about: "Co-President 2024 | Health Science (Honours)",
            link: "https://www.linkedin.com/in/andrew-chami/",
            cover: "/Andrew_Chami.JPG",
        },
        {
            name: "Chantel Luo",
            about: "Co-President 2024 | Biomedical and Chemical Engineering, Level 3",
            link: "https://www.linkedin.com/in/chantal-luo/",
            cover: "/Chantel_Luo.JPG",
        }

    ];

    const webDev = [
        {
            name: "Vanessa Lai",
            about: "Third Year Software Engineering",
            link: "https://www.linkedin.com/in/vanessa-lai",
            cover: "/MGEM-Logo.png",
        }
    ];
    

    return (
        <div className="py-20 p-20 sm:p-0 text-left ">
            <div className="text-5xl font-bold text-left mt-14">
                TEAM
            </div>
            <Title text="Co-Pres" className="flex flex-col items-start justify-center mb-5" />
            <div className="grid grid-cols-3 mb-10">
                {pres.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full space-y-5 cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>
            
            <hr></hr>

            <Title text="WebDev" className="flex flex-col items-start justify-center mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
                {webDev.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full space-y-5 cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

            <hr></hr>
        </div>
    );
}

export default Members;
