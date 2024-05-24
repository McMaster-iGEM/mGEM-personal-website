import React from 'react';
import Title from './Title';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Testimonies = () => {
    const testimonies = [
        {
            quote: "QUOTE ETC",
            name: "NAME",
            title: "position"
        },
        {
            quote: "QUOTE STUFF",
            name: "NAME",
            title: "position"
        }

    ]
    return (
        <div className='mt-10'>
            <Title text="TESTIMONIES" className="flex flex-col items-start justify-center " />
            <InfiniteMovingCards items={testimonies}  ></InfiniteMovingCards>
        </div>
    );
}

export default Testimonies;

