
import Image from 'next/image';

export default function Specialists() {
    const specialists = [
        { id: 1, title: "Cardial Science", image: "/et5.jpg", description: "Heart care from the heart" },
        { id: 2, title: "Cardial Science", image: "/et7.webp", description: "Heart care from the heart" },
        { id: 3, title: "Cardial Science", image: "/et6.webp", description: "Heart care from the heart" },
        { id: 4, title: "Cardial Science", image: "/et7.webp", description: "Heart care from the heart" },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className=" bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
                <div className="md:w-1/2 md:pl-6">
                    <h2 className="text-lg font-semibold">Our Specialists</h2>
                    <p className="text-black">Meet our team of highly skilled healthcare professionals, dedicated to your care.</p>
                    <p className="text-black">Aster’s world-class, Centres of Excellence (COE) are an amalgamation of experienced doctors, state of the art technology, and the highest level of patient care and treatment. Our COE’s ensure that every aspect of your care is seamless and the team of experts work together to provide the care you need.</p>
                    <div className="mt-10">
                        <button
                            className="relative inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-700 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-100 hover:shadow-lg focus:bg-blue-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-200 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => window.location.href = '/'}
                        >
                            VIEW ALL
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {specialists.map((specialist) => (
                    <div key={specialist.id} className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image src={specialist.image} alt={specialist.title} layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-4">
                            <h2 className="font-bold text-xl mb-2">{specialist.title}</h2>
                            <p className="text-gray-700">{specialist.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
