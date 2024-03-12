import Head from 'next/head';

export default function Testimonials() {
    return (
        <div className="min-h-screen bg-cover bg-center bg-[#245c6d] " >
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-semibold mb-4 text-yellow-100">
                    <i className="fas fa-users mr-2" ></i>
                    What Our Patients Are Saying
                </h1>
                <h2 className="text-xl font-medium text-white">
                    <i className="fas fa-heartbeat mr-2"></i>
                    Our patients are our best advocates, hear the inspiring stories of their treatment journey.
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-6">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                        <iframe className="w-full" style={{ height: '300px' }} src="https://www.youtube.com/embed/S8WXTyQDHO0" title="YouTube video" allowFullScreen></iframe>
                        <div className="p-4">
                            <p className="text-gray-600">Our patient, Mr. David Rajkumar, recently suffered a heart attack and was promptly attended to by Dr. Dimpu. As a result, Mr. David Rajkumar underwent ....</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                        <iframe className="w-full" style={{ height: '300px' }} src="https://www.youtube.com/embed/YsWSpp_c4xc" title="YouTube video" allowFullScreen></iframe>
                        <div className="p-4">
                            <p className="text-gray-600">Another short description related to the video content.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                        <iframe className="w-full" style={{ height: '300px' }} src="https://www.youtube.com/embed/4Lu2NO8d7hc" title="YouTube video" allowFullScreen></iframe>
                        <div className="p-4">
                            <p className="text-gray-600">More information or description here.</p>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    );
}
