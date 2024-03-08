
export default function Specialists() {
    return (
        <div className="flex">
            <div  className=" bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
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
                    </button></div>
                   
                </div>
                <div className="mt-16">
                    <div className="flex flex-row gap-4 mt-4">
                        <div className="flex flex-row gap-4 mt-4">
                            <div
                                className="border border-gray-300 p-4 rounded-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between relative"
                                style={{
                                    backgroundImage: 'url("et5.jpg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '250px',
                                    height: '250px'
                                }}
                            >
                                <div className="flex flex-col justify-center h-full text-white group hover:text-gray-300">
                                    <h3 className="text-lg font-semibold mb-2 transition duration-300">Cardial Science</h3>
                                    <p className="mb-2 transition duration-300">Heart care from the heart</p>
                                    <p className="transition duration-300">Cardial sciences are one of the most...</p>
                                </div>
                            </div>

                            <div
                                className="border border-gray-300 p-4 rounded-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between relative"
                                style={{
                                    backgroundImage: 'url("et7.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '250px',
                                    height: '250px'
                                }}
                            >
                                <div className="flex flex-col justify-center h-full text-white group hover:text-gray-300">
                                    <h3 className="text-lg font-semibold mb-2 transition duration-300">Cardial Science</h3>
                                    <p className="mb-2 transition duration-300">Heart care from the heart</p>
                                    <p className="transition duration-300">Cardial sciences are one of the most...</p>
                                </div>
                            </div>
                            <div
                                className="border border-gray-300 p-4 rounded-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between relative"
                                style={{
                                    backgroundImage: 'url("et6.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '250px',
                                    height: '250px'
                                }}
                            >
                                <div className="flex flex-col justify-center h-full text-black group hover:text-gray-300">
                                    <h3 className="text-lg font-semibold mb-2 transition duration-300">Cardial Science</h3>
                                    <p className="mb-2 transition duration-300">Heart care from the heart</p>
                                    <p className="transition duration-300">Cardial sciences are one of the most...</p>
                                </div>
                            </div>
                            <div
                                className="border border-gray-300 p-4 rounded-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between relative"
                                style={{
                                    backgroundImage: 'url("et7.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '250px',
                                    height: '250px'
                                }}
                            >
                                <div className="flex flex-col justify-center h-full text-white group hover:text-gray-300">
                                    <h3 className="text-lg font-semibold mb-2 transition duration-300">Cardial Science</h3>
                                    <p className="mb-2 transition duration-300">Heart care from the heart</p>
                                    <p className="transition duration-300">Cardial sciences are one of the most...</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
}