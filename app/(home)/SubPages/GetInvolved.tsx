import React from 'react';
import Testimonies from '../components/Testimonies';
import Link from 'next/link';

const GetInvolved = () => {
    return (
        <div className="max-w-7xl py-10 mt-16 mx-auto max-h-full px-5">
            <div className="text-4xl font-bold text-left mt-14">
                GET INVOLVED
            </div>
            <div className = "min-h-[60vh] flex items-center justify-between ">
                <div className = "space-y-10">
                    <h2 className = "text-3xl lg:text-4xl font-bold underline underline-offset-2 decoration-red-700">
                        Officia qui irure fugiat dolor Lorem commodo.
                    </h2>
                    <p className = "md:w-96 text-lg text-gray-800"> 
                        Velit aute ullamco nulla ut anim velit enim exercitation in do amet dolor.
                    </p>
                    <Link href="https://google.us8.list-manage.com/subscribe?u=5eb5b5dd275ceaa9486ea4d89&id=293e3ffd61" className = "inline-block">
                        <div>
                          
                            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:scale-110 p-1">
                            Join our mailing list 
                            </button>
                        </div>
                    </Link>
                </div>
                <div>
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
