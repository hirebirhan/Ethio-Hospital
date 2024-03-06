import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800  py-6 text-white" style={{ backgroundColor: '#0f172a' }} >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="font-bold">Quick Links</h3>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">Find a Doctor</a></li>
                            <li><a href="#" className="hover:underline">Book an Appointment</a></li>
                            <li><a href="#" className="hover:underline">Make an Enquiry</a></li>
                            <li><a href="#" className="hover:underline">Leave a Feedback</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Hospitals</h3>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">Aster Wellness</a></li>
                            <li><a href="#" className="hover:underline">Aster Volunteers</a></li>
                            <li><a href="#" className="hover:underline">Aster Foundation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Insurance</h3>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">Insurance Plans</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Stay Connected</h3>
                        <ul className="mt-2">
                            <li> <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block align-middle mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.6 5.1h-1.8c-.3 0-.5.2-.5.5v1.9h2.3V9h-2.3v7.1h-2.7V9H9.6v-.9c0-.6.3-.9.9-.9h1.7V6.2c0-1.6-.9-2.5-2.5-2.5h-2c-1.6 0-2.5.9-2.5 2.5v1.9H4.2V9H2.3V6.7c0-.3.2-.5.5-.5h1.8V4.2c0-.9.8-1.6 1.7-1.6h2c.9 0 1.7.7 1.7 1.6v1.9h2.3v1.9z" clipRule="evenodd" />
                                </svg>
                                Facebook
                            </a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                        <div className="mt-4">
                            <h4 className="font-bold">Subscribe to our Newsletter</h4>
                            <form className="mt-2">
                                <input type="email" placeholder="Your email address" className="p-2 bg-gray-700 rounded" />
                                <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-600 rounded ml-2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
