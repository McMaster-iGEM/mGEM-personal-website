import React from 'react';
import Image from 'next/image';

const Container = () => {
    return (
        <div className="items-center justify-center ">
            <a>
                <Image src="/MGEM-Logo.png" alt="MGEM" width={1000} height={1000} />
            </a>
        </div>
    );
}

export default Container;