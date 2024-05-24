import React from 'react';
import Members from '../components/Members';
import Testimonies from '../components/Testimonies';

const OurTeam = () => {
    return (
        <div>
            <div className="max-w-7xl py-20 mx-auto max-h-full">
                <div className="pl-3"> 
                    <Members />
                    <Testimonies />
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
