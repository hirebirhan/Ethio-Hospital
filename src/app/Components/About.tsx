

export default function About(){
    return(
        <div style={{ backgroundColor: '#dcfce7' }} className=" p-12 rounded-lg shadow flex md:flex-row flex-col items-center" >
            <div className="flex-1 text-left mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-gray-900">Welcome to Ethio Tebib Hospital</h1>
                <p className="text-gray-700">Ethio Tebib Hospital is dedicated to providing high-quality healthcare services, embracing modern medical technologies, and ensuring compassionate care for all patients. Explore our specialized services, experienced medical professionals, and state-of-the-art facilities.</p>
            </div>
            <div className="flex-1 w-full h-auto bg-cover bg-center" style={{ backgroundImage: "url('/et3.jpg')", minHeight: '24rem' }}>
            </div>
        </div>
    )
}