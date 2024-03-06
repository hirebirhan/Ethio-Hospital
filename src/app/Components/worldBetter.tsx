import Head from 'next/head';
import Link from 'next/link';

export default function MakingTheWorldBetter() {
    return (
        <>
            <Head>
                <title>Making the World a Little Better</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="flex flex-col items-center  justify-center mx-auto h-screen bg-cover bg-center text-center" style={{ backgroundImage: "url('/ETH6.webp')" }}>

                <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Making the World a Little Better</h1>
                <p className="text-lg mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Uniting people from all walks of life   to help the underserved sections of society

                </p>
                <Link href="/">
                    <Link href={"/"} className="inline-block bg-[#155e75] text-white font-bold py-2 px-6 rounded hover:bg-[#22c55e] transition duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Ethio-Tebib Volunteers<span className="ml-2">→</span>
                    </Link>
                </Link>
            </div>
        </>
    );
}
