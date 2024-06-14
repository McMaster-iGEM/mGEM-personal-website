import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-7xl py-10 mx-auto max-h-full px-5">
            <div className="text-4xl font-bold text-left mt-32 mb-5">
                ABOUT US
            </div>
            <section className="stats mt-[50px] xl:mt-[100px] relative z-20 maroon py-[50px] xl:py-[100px] text-white">
                <div className="container mx-auto space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="stats__item text-center md:border-l-0 border-white">
                            <div className="inline-block">
                                <h1 className="text-5xl font-bold mb-4">40+</h1>
                                <p className="text-xl">Members</p>
                            </div>
                        </div>
                        <div className="stats__item text-center border-white md:border-l md:border-r-0">
                            <div className="inline-block">
                                <h1 className="text-5xl font-bold mb-4">10+</h1>
                                <p className="text-xl">Years Established</p>
                            </div>
                        </div>
                        <div className="stats__item text-center md:border-l md:border-r-0 border-white">
                            <div className="inline-block">
                                <h1 className="text-5xl font-bold mb-4">2nd</h1>
                                <p className="text-xl">Place in 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;

