import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative mt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-full">
                </div>
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-3xl  lg:text-5xl tracking-tight font-extrabold text-[#1f2937]  sm:text-4xl md:text-5xl font-serif">
                                <span className="block xl:inline text-variant	 ">Advanced Care,</span>
                                <span className="block text-variant">Compassion for All</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Welcome to our world-class healthcare facility, where we combine advanced medical care with unwavering compassion for all our patients. Experience cutting-edge medical innovation at the heart of our community, where your health and well-being are our top priorities.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link href="/appointments" passHref>
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:py-4 md:text-lg md:px-10">
                                            Book Appointment
                                        </button>
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link href="/about" passHref>
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="relative h-full w-full">
                    <Image
                        src="/image/ETHH4.webp"
                        alt="Modern hospital building"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
