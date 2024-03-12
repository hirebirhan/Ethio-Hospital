// pages/our-locations.js

import Image from 'next/image';
import React from 'react';

const OurLocations = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-[#245c6d]">
            <div className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-3xl font-bold text-center mb-6 text-white">Our Locations - Ethio-Tebib</h1>
                <div className="md:w-1/2 md:pl-6">
                <p className="text-md md:text-lg text-white p-6">
                    Ethio-Tebib stands as a beacon of healthcare excellence in Addis Ababa, dedicated to providing top-notch medical services and fostering well-being in the community. With a commitment to excellence, innovation, and compassionate care, Ethio-Tebib has established itself as a trusted healthcare provider, offering a wide range of medical services tailored to meet the diverse needs of our patients.
                </p>
                <div className="p-6 text-white">
                    <h2 className="text-lg md:text-xl font-semibold mb-2 ">Location & Contact Information:</h2>
                    <p className=" mb-1"><strong>Address:</strong> Ethio-Tebib, Addis Ababa, Ethiopia</p>
                    <p className=" mb-1"><strong>Phone Number:</strong>09-</p>
                    <p className=""><strong>Emergency Contact:</strong>9000</p>
                </div>

                    <Image src="/ETHH1.jpg" alt="Our Services" width={24} height={26} layout="responsive" />

                </div>
            </div>
        </div>
    );
};

export default OurLocations;
