import React from 'react';
import { SponsorIcons } from '../components/SponsorIcons';
import Link from 'next/link';

const Sponsors = () => {
    return (
        <div className="max-w-7xl py-10 mx-auto max-h-full px-5">
            <div className="text-4xl font-bold text-left mt-32 mb-5">
                SPONSORS
                <div className = "min-h-[60vh] flex items-center justify-between ">
                <div className = "space-y-10">
                    <h2 className = "text-3xl lg:text-4xl font-bold underline underline-offset-2 maroon-decoration">
                        Thank you message probably. 
                    </h2>
                    <p className = "md:w-96 text-lg text-gray-800 py-2"> 
                        Interested in sponsorship or collaboration opportunities?
                        <br/>
                        <br/>
                        Learn more about our sponsorship package by emailing us.
                    </p>
                    <Link href="mailto:igemmcmaster@gmail.com" className = "inline-block">
                        <div>
                            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110 p-1">
                             Email Us
                            </button>
                        </div>
                    </Link>
                </div>
                <div>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
            </div>
            <hr></hr>
                <SponsorIcons />
                <hr />
            </div>
        </div>
    );
}

export default Sponsors;
