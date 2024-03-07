import Link from "next/link";
import Image from "next/image";

export default function WeTreat() {
    const infoBlocks = [
        { id: 1, number: '5', title: '5 States', description: 'High-quality care closer to you' },
        { id: 2, number: '15+', title: '15 Hospitals', description: 'Providing world-class healthcare' },
        { id: 3, number: '1600+', title: 'Doctors', description: 'Working together to give best medical care' },
        { id: 4, number: '40+', title: 'Speciality', description: 'To help you live better' },
        { id: 5, number: '3 lac+', title: 'Patients', description: 'Treated every year' },
    ];

    return (
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#f1f5f9' }}>
            <div className="flex flex-col items-center mb-4">
                <h2 className="text-lg font-semibold">We’ll Treat You Well</h2>
                <p style={{ minHeight: '6rem' }} className="flex flex-grow justify-center items-center text-center">
                    At Ethio-Tebib, we give utmost importance to provide care, attention, and high-quality medical services to our patients. <br />
                    This promise to patients, employees, and society at large is ingrained in the heart of each Asterian and is what inspires us to serve, innovate, and grow.
                </p>
                <button className="bg-white text-gray-800 font-bold py-4 px-9 rounded transition-colors duration-300 ease-in-out hover:bg-[#328090] hover:text-white border border-blue-500 flex items-center justify-center">
                    <Link href="/">KNOW MORE</Link>
                    <span className="ml-2">&#x279C;</span> 
                </button>
            </div>
            <Image src="/ETHH4.jpeg" alt="Our Services" width={12} height={12} layout="responsive" />
            <div className="flex justify-center items-center mt-4">
                {infoBlocks.map((block, index) => (
                    <div key={block.id} className="text-center p-4 relative">
                        {index > 0 && (
                            <div className="absolute inset-y-0 left-0 w-px bg-gray-300" style={{ marginLeft: '-0.5rem' }}></div>
                        )}
                        <h1>{block.number}</h1>
                        <h3>{block.title}</h3>
                        <p>{block.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
