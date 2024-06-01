import React from 'react';
import Title from './Subtitle';
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
        <div className="py-20 sm:p-0 text-left ">
            <div className="text-4xl font-bold mt-14">
                TEAM
            </div>
            <Title text="Co-Pres" className="mb-5" />
            <hr></hr>
            <div className="flex flex-col items-start justify-center grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 py-10 mb-10">
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
            
            
            
            <Title text="Wet Lab" className="mb-5" />

            <hr></hr>

            <Title text="Dry Lab" className="mb-5" />

            <hr></hr>

            <Title text="Human Practices" className="mb-5" />

            <hr></hr>

            <Title text="Web Dev" className="flex flex-col items-start justify-center mb-5" />
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
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
            </div> */}

            <hr></hr>

            <Title text="Media" className="mb-5" />

            <hr></hr>

            <Title text="Administration" className="mb-5" />

            <hr></hr>

            <Title text="Advisors" className="mb-5" />

            <hr></hr>
        </div>
    );
}

export default Members;
