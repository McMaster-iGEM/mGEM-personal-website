/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Testimonies from '../components/Testimonies';
import Link from 'next/link';
import MailingList from '../components/MailingList';

const GetInvolved = () => {
    return (
        <div className="max-w-7xl py-10 mx-auto max-h-full px-5 ">
            <div className="mb-10">
                <div className="text-4xl font-bold text-left mt-32">
                    GET INVOLVED
                </div>
                <div className="min-h-[60vh] flex flex-col items-left justify-between mt-10 lg:flex-row lg:gap-0 gap-14 ">
                    <div className="space-y-5">
                        <h2 className="max-w-2xl text-2xl lg:text-3xl font-bold underline underline-offset-2 maroon-decoration">
                            Here at mGEM, we're more than just a research team; we're a dynamic community passionate about synthetic biology!
                        </h2>
                        <p className="max-w-xl text-lg text-gray-800">
                            If you're interested in exploring the fascinating world of genetic engineering and interdisciplinary collaboration, this is the place for you! 
                        </p>
                        <div className="inline-block max-w-2xl left-0 mb-10">
                            <MailingList />
                        </div>
                    </div>
                    <div className="mt-10">
                        <img src="/GeneralMembers.jpg" alt="General Members" width="500" height="500" />
                    </div>
                </div>
            </div>
            <hr />
            <div className = "m-6">
                <div className="min-h-full flex flex-col md:flex-row items-start justify-center m-12 gap-10">
                    <div className="space-y-10 w-full md:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold underline underline-offset-2 maroon-decoration">
                            Join the Team
                        </h2>
                        <p className="md:w-96 text-lg text-gray-800 py-2">
                            Mention positions hiring (last updated)
                            <br />
                        </p>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeHcZqon-tLrMddLULJoM20c3jSV1Hvcj6RWf5S9eLyNU7QCg/viewform" className="inline-block">
                                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110 p-1">
                                    Subteam Recruitment
                                </button>
                        </Link>
                    </div>
                    <div className="space-y-10 w-full md:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold underline underline-offset-2 maroon-decoration">
                            Become a General Member
                        </h2>
                        <p className="md:w-96 text-lg text-gray-800 py-2">
                        Become a part of our community by signing up as a general member. As a member, you'll gain access to exclusive events and workshops designed to expand your knowledge in synthetic biology.
                            <br />
                        </p>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdT-BOmd93_IRWT6hSbULLS6Gv0cmAUySkw14xcv11ETVqQJQ/viewform" className="inline-block">
                
                                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110 p-1">
                                    General Recruitment
                                </button>
                        
                        </Link>
                    </div>
                </div>
            </div>

            <hr />
            <div className="pl-3">
                <Testimonies />
            </div>
        </div>

    );
}

export default GetInvolved;
