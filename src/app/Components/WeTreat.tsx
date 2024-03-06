import Link from "next/link";
import Image from "next/image";


export default function WeTreat (){
   return(
       <div className=" p-6 rounded-lg shadow" style={{ backgroundColor: '#f1f5f9' }}>
           <div className="flex flex-col items-center mb-4">
               <h2 className="text-lg font-semibold">We’ll Treat You Well</h2>
               <p style={{ minHeight: '6rem' }} className="flex flex-grow justify-center items-center">
                   At Ethio-Tebib, we give utmost importance to provide care, attention, and high-quality medical services to our patients. <br />
                   This promise to patients, employees, and society at large is ingrained in the heart of each Asterian and is what
                   inspires us to serve, innovate, and grow.
               </p>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                   <Link href="/">View More</Link>
               </button>
           </div>
           <Image src="/et4.webp" alt="Our Services" width={500} height={300} layout="responsive" />
           <div className="flex justify-center gap-4">
               <div className="text-center">
                   <h1>5</h1>
                   <h3>5 States</h3>
                   <p>High-quality care closer to you</p>
               </div>
               <div className="text-center">
                   <h1>15+</h1>
                   <h3>15 Hospitals</h3>
                   <p>Providing world-class healthcare</p>
               </div>
               <div className="text-center">
                   <h1>1600+</h1>
                   <h3> Doctors</h3>
                   <p>Working together to give best medical care</p>
               </div>
               <div className="text-center">
                   <h1>40+</h1>
                   <h3> Speciality</h3>
                   <p>To help you live better</p>
               </div>
               <div className="text-center">
                   <h1>3 lac+</h1>
                   <h3> Patients</h3>
                   <p>Treated every year</p>
               </div>
           </div>
       </div>
   )
}