import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <div className="bg-[#2B7786] text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <Link href="/need-help">Need Help?</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/feedback">Leave Feedback</Link>
                    </div>
                </div>
            </div>
            <div className="fixed w-full top-0 mt-8 z-50 shadow-lg">
                <nav className="text-white bg-[#155e75]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <Image src="/ethiotebib.jpg" alt="Ethio-Tebib logo" width={55} height={44} />
                                <h1 className="ml-2">Ethio-Tebib</h1>
                            </div>
                            <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
                                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">HOME</Link>
                                <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">ABOUT</Link>
                                <Link href="/OurSpecialists" className="px-3 py-2 rounded-md text-sm font-medium">DOCTORS</Link>
                                <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium">SERVICES</Link>
                                <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium">BLOG</Link>
                                <button className="bg-[#9d174d] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-all hover:bg-green-500">
                                    GET APPOINTMENT
                                </button>
                            </div>
                            <div className="md:hidden">
                                <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {/* Include a hamburger icon here */}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
