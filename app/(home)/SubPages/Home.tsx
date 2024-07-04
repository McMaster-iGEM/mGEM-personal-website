import React from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import HeroSubSection from '../components/HeroSubSection';
import Storybook from '../components/HeroPhotos';

const Home = () => {
    return (
        <div className="mb-20 max-w-7xl py-10 mx-auto items-center justify-center px-5">
            <div className="flex mt-20 max-h-full flex-col overflow-hidden leading-none">

                <ContainerScroll titleComponent={
                    <>
                        <div className="italic text-7xl md:text-9xl lg:text-9xl xl:text-[14rem]">mGEM</div>
                        <div className="stroke reverse-italic text-7xl md:text-9xl  lg:text-9xl xl:text-[14rem]">mGEM</div>
                        <div className="italic text-7xl  md:text-9xl lg:text-9xl xl:text-[14rem]">mGEM</div>
                    </>
                }>
                    <video
                        className="mx-auto rounded-2xl w-full h-full object-cover"
                        draggable={false}
                        loop={true}
                        muted
                        autoPlay={true}
                    >
                        <source src="/Videos/animation.mp4" type="video/mp4" />
                    </video>
                </ContainerScroll>
            </div>
            <hr />
            <div className="py-10">
                <HeroSubSection />
            </div>
            <hr />
            <Storybook />
        </div>
    );
}

export default Home;
