import React from 'react';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from './ui/direction-aware-hover';

const Members = () => {
    const pres = [
        {
            name: "HELLO",
            about: "BYE",
            link: "https://www.linkedin.com/in/vanessa-lai",
            cover: "/MGEM-Logo.png",
        },
        {
            name: "HELLO",
            about: "BYE",
            link: "https://www.linkedin.com/in/vanessa-lai",
            cover: "/MGEM-Logo.png",
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
            <Title text="Co-Pres" className="flex flex-col items-start justify-center space-y-2" />
            <div className="grid grid-cols-3">
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

            <Title text="WebDev" className="flex flex-col items-start justify-center " />
            <div className="grid grid-cols-1 sm:grid-cols-2">
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
        </div>
    );
}

export default Members;
