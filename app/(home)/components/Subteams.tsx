import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const Subteams = () => {
    const content = [
        {
            title: "Wet Lab",
            description: "Nostrud laborum consectetur proident sit.",
            content: <img src="/MGEM-Logo.png" alt="MGEM Logo" />
        },
        {
            title: "Dry Lab",
            description: "Nostrud laborum consectetur proident sit.",
            content: <img src="/MGEM-Logo.png" alt="MGEM Logo" />
        },
        {
            title: "Human Practices",
            description: "Nostrud laborum consectetur proident sit.",
            content: <img src="/MGEM-Logo.png" alt="MGEM Logo" />
        },

    ];

    return (
        <div>
            <StickyScroll content={content} />
        </div>
    );
}

export default Subteams;
