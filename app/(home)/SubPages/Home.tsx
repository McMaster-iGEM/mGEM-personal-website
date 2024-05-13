import React from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import Container from '../components/Container';

const Home = () => {
    return (
        <div>
            <div className="customLarge py-10 px-10 flex justify-center items-center flex-shrink ">
                <ContainerScroll titleComponent={
                        <>
                        <div>mGEM</div>
                        <div className="stroke">mGEM</div>
                        <div>mGEM</div>
                        </>
                }>
                    <Container />
                </ContainerScroll>
             </div>
        </div>

    );
}

export default Home;
