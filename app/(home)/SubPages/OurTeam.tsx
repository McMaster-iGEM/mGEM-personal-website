import React from 'react';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import Title from '../components/Title';
import Members from '../components/Members';

const OurTeam = () => {
    const testimonies = [
        {
            quote: "HHSHSHSH",
            name: "Vanessa",
            title: "web dev"
        },
        {
            quote: "ahhhhf",
            name: "Lai",
            title: "web dev"
        }

    ]
    return (
        <div className='py-20'>
            <div className=" max-w-7xl mx-auto p-5 mt-20">
                <Members />
            </div>
            <Title text="TESTIMONIES" className="flex flex-col items-start justify-center" />
            <InfiniteMovingCards items={testimonies}  ></InfiniteMovingCards>
        </div>
    );
}

export default OurTeam;
