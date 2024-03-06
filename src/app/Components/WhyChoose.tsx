import Link from "next/link";

export default function WhyChoose() {
    const card = [
        { image: "url('et9.webp')", title: "Accesible Healthcare", subtitle: "Subtitle 1", description: "best doctoreof the year and  so much" },
        { image: "url('ETH1.webp')", title: "Accesible Healthcare", subtitle: "Avaliblity of wold-class care and treatiment", description: "that is accesible to each " },
        { image: "url('ETH2.webp')", title: "The write Diagnosis", subtitle: "our team of speciality listens to your", description: "concern and Evaluet condiyions.." },
        { image: "url('ETH3.webp')", title: "Personalized Care", subtitle: "Our well qualified, comppassionate and trian ", description: "doctor & nurse provide hign standard.." },
        { image: "url('ETH4.webp')", title: "Safety", subtitle: "in thise unprecidence times your safety is ", description: "our prime concer so.." },
        { image: "url('ETH5.webp')", title: "Accreditation", subtitle: "our hospitals are accredites by national", description: "international authorities for mentaning.." }
    ];
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-8">
                <div style={{ backgroundColor: '#245c6d' }} className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <div className="md:w-1/2 md:pl-6">
                        <h2 className="text-lg font-semibold text-white">Why Choose Ethio-tebib?</h2>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tincidunt sapien. Nulla facilisi. Duis sed lorem eget arcu tristique scelerisque ut sed ligula. Nullam quis urna id mauris ultrices pellentesque. Vestibulum faucibus tellus sit amet sem sollicitudin malesuada.</p>
                        <div className="mt-10">
                            <Link href="/Home">
                                <Link href={""} className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-700 font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-100 hover:shadow-lg focus:bg-blue-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-200 active:shadow-lg transition duration-150 ease-in-out">
                                    BACK TO HOME
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </Link>
                        </div>
                    </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                        {card.map((card, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 rounded-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between relative"
                            style={{
                                backgroundImage:card.image,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '300px'
                            }}
                        >
                            <div className="flex flex-col justify-center h-full text-white group hover:text-gray-300">
                                    <h3 className="text-lg font-semibold mb-2 transition duration-300">{card.title}</h3>
                                    <p className="mb-2 transition duration-300">{card.subtitle}</p>
                                    <p className="transition duration-300">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
}
