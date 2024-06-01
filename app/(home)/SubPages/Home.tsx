import React from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import HeroSubSection from '../components/HeroSubSection';
import Storybook from '../components/Storybook';

const Home = () => {
    return (
        <div className="mb-20">
            <div className="flex mt-20 max-h-full max-w-full space-y-10 customLarge flex-col overflow-hidden">

                <ContainerScroll titleComponent={
                    <>
                        <div className = "italic">mGEM</div>
                        <div className="stroke reverse-italic">mGEM</div>
                        <div className = "italic">mGEM</div>
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
            <hr></hr>
            <div >
                <HeroSubSection />
            </div>
            <hr></hr>
            <Storybook />
        </div>
    );
}

export default Home;
