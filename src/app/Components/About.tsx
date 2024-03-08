import Link from 'next/link';
import { SetStateAction, useState } from 'react';

export default function About() {
  

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#245c6d]" style={{ backgroundImage: "url('/Image/ETHH5.webp')" }}>
            <div className="w-full md:w-1/2 h-auto bg-cover bg-center rounded-lg">
                <div className="p-8  bg-opacity-90 rounded-lg shadow-lg">
                    <div className="md:w-1/2 md:pl-6 font-bold text-black ">
                        <h2 className="text-xl md:text-2xl   font-semibold mb-3">Ethio-Tebib Multispecial Hospital</h2>
                        <p className="text-xl md:text-2xl font-semibold mb-3">Now Open in Whitefield</p>
                    <button className="mt-24 bg-white text-gray-800 font-bold py-4 px-11 rounded transition-colors duration-300 ease-in-out hover:bg-[#328090] hover:text-white border border-blue-500 flex items-center justify-center">
                        <Link href="/">KNOW MORE</Link>
                        <span className="ml-2">&#x279C;</span>
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
}
