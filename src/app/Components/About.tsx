

export default function About(){
    return(
    
        <>
            <div className="flex flex-col items-center justify-center mt-16">
                <div style={{ backgroundColor: '#245c6d' }} className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <div className="md:w-1/2 md:pl-6">
                        <h2 className="text-lg font-semibold text-white">Welcome to Ethio Tebib Hospital</h2>
                        <p className="text-white">Ethio Tebib Hospital is dedicated to providing high-quality healthcare services, embracing modern medical technologies, and ensuring compassionate care for all patients. Explore our specialized services, experienced medical professionals, and state-of-the-art facilities.</p>
                    </div>
                </div>
                <div className="flex-1 w-full h-auto bg-cover bg-center" style={{ backgroundImage: "url('/et3.jpg')", minHeight: '28rem' }}>
                </div>
            </div>
        </>
    );
}
