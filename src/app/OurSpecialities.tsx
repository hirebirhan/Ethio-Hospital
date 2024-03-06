import Head from 'next/head';

export default function OurSpecialists() {
    return (
        <div>
            <div className="relative min-h-screen bg-[url('/your-background-image.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <p className="max-w-lg text-white text-center p-4 bg-opacity-80 rounded-lg">
                        Welcome to our Psychiatry and Counselling Services. We are here to support you with professional care.
                    </p>
                </div>

                <div className="absolute top-0 right-0 w-full md:w-1/3 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg opacity-95">
                        <h2 className="text-xl mb-4 font-bold text-center">Enquiry Form</h2>
                        <input type="text" placeholder="First Name" className="block w-full p-2 mb-4 border rounded" />
                        <input type="text" placeholder="Last Name" className="block w-full p-2 mb-4 border rounded" />
                        <input type="email" placeholder="Email" className="block w-full p-2 mb-4 border rounded" />
                        <input type="tel" placeholder="Phone Number" className="block w-full p-2 mb-4 border rounded" />
                        <select className="block w-full p-2 mb-4 border rounded">
                            <option>Select Hospital</option>
                            <option>Hospital 1</option>
                            <option>Hospital 2</option>
                            <option>Hospital 3</option>
                        </select>
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
