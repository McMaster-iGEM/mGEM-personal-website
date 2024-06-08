import React from 'react';
import Testimonies from '../components/Testimonies';
import Link from 'next/link';
import MailingList from '../components/MailingList';

const GetInvolved = () => {
    return (
        <div className="max-w-7xl py-10 mx-auto max-h-full px-5">
            <div className="text-4xl font-bold text-left mt-32 py-5">
                GET INVOLVED
            </div>
            <div className = "min-h-[60vh] flex items-center justify-between mb-5 ">
                <div className = "space-y-10">
                    <h2 className = "text-2xl lg:text-3xl font-bold underline underline-offset-2 maroon-decoration">
                        Officia qui irure fugiat dolor Lorem commodo.
                    </h2>
                    <p className = "md:w-96 text-lg text-gray-800"> 
                        Velit aute ullamco nulla ut anim velit enim exercitation in do amet dolor.
                    </p>
                    <div className = "inline-block max-w-2xl left-0">
                        <MailingList />
                    </div>
                </div>
                <div className='mt-10'>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
            </div>
            <hr></hr>
            <div className="pl-3"> 
                    <Testimonies />
            </div>

        </div>
    );
}

export default GetInvolved;
