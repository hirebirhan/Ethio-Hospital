import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="fixed w-full top-0 z-50">
            <nav className="text-white shadow-lg" style={{ backgroundColor: '#2B7786' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1>Ethio-Tebib</h1>
                        <Image src="/ethiotebib.jpg" alt="Ethio-Tebib logo" width={55} height={44} />
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium ">Hospitals</Link>
                            <Link href="/OurSpecialists" className="px-3 py-2 rounded-md text-sm font-medium">Our Specialists</Link>
                            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium ">Book An Appointment</Link>
                            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium ">International Patients</Link>
                        </div>
                        <div className="md:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
