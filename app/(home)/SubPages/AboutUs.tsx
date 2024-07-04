import React from 'react';
import Title from '../components/Subtitle';

const AboutUs = () => {
    return (
        <div className="max-w-7xl py-10 mx-auto max-h-full px-5">
            <div className="text-4xl font-bold text-left mt-32 mb-5">
                ABOUT US
            </div>
            <Title text="Our Mission" className="mb-5" />
            <hr />
            <div className ="flex items-center justify-between">
                <p className = "text-xl mt-5 font-sans">
                A highly accomplished international synthetic biology competition aimed towards mostly undergraduates, 
                with the involvement of graduates, professors, and various stakeholders. Interdisciplinary teams 
                specializing in Wet Lab, Dry Lab, and Human Practices collaborate to create novel synthetic biology 
                oriented projects that can be applied in the real world!
                </p>
            </div>
            <section className="stats mt-[50px] xl:mt-[100px] relative z-20 maroon py-[50px] xl:py-[100px] text-white rounded-lg">
                <div className="container mx-auto space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="stats__item text-center md:border-l-0 border-white">
                            <div className="inline-block">
                                <h1 className="text-5xl font-bold mb-4">36+</h1>
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
                                <h1 className="text-5xl font-bold mb-4">Silver</h1>
                                <p className="text-xl">Medalist 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Title text="Wet Lab" className="mb-5" />
            <hr />
            <div className ="flex flex-col items-center justify-between lg:flex-row lg:gap-0 gap-14">
                <p className = "max-w-2xl text-xl mt-3 font-sans">
                Wet lab is a subcommittee of the iGEM team that is responsible for developing biological 
                background for the project. This team is responsible for completing background literature reviews 
                for the project to provide a rationale and proof of concept. The team is also responsible for 
                developing and designing synthetic biological systems that will be designed on benchling and 
                built/testing in the lab. During the spring and summer term the wet lab team will work in the 
                lab to make the project into reality, generating data that will be used to validate the project design.
                </p>
                <div>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
            </div>

            <Title text="Dry Lab" className="mb-5 text-right" />
            <hr />
            <div className ="flex flex-col items-center justify-between lg:flex-row lg:gap-0 gap-14">
                <div>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
                <p className = "max-w-2xl text-xl mt-3">
                (...)
                </p>
            </div>

            <Title text="Human Practices" className="mb-5" />
            <hr />
            <div className ="flex flex-col items-center justify-between lg:flex-row lg:gap-0 gap-14">
                <p className = "max-w-2xl text-xl mt-3 font-sans">
                The Human Practices Subcommittee explores the real-world application of our project and its social, 
                economic, and environmental implications. We actively reflect on the impact our project will have 
                on the world and how the world - different perspectives, views, and considerations - impacts our project. 
                As the goal of our iGEM team is to tackle global challenges by using synthetic biology to solve problems, 
                HP strives to ensure this work is reflective, responsive, and responsible. 
                </p>
                <div>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
            </div>

            <Title text="Media (Design & Social Media)" className="mb-5 text-right" />
            <hr />
            <div className ="flex flex-col items-center justify-between lg:flex-row lg:gap-0 gap-14">
                <div>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
                <p className = "max-w-2xl text-xl mt-3">
                (...)
                </p>
            </div>

            <Title text="Admin (Project management & Finance)" className="mb-5" />
            <hr />
            <div className ="flex flex-col items-center justify-between lg:flex-row lg:gap-0 gap-14">
                <p className = "max-w-2xl text-xl mt-3 font-sans">
                (...)
                </p>
                <div>
                    <img src="/MGEM-Logo.png" alt="Logo" width="500" height="500" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

