"use client";
import React, { useState } from 'react';
import OurLocations from './our-locations';
import Footer from '../shared/Footer';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [remarks, setRemarks] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email: any) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/
            );
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const nameRegex = /^[A-Za-z\s]+$/;

        if (!nameRegex.test(firstName.trim()) || !nameRegex.test(lastName.trim())) {
            return alert('Name should only contain letters.');
        }
        if (!validateEmail(email)) {
            return alert('Please enter a valid email address.');
        }
        if (!/^\d+$/.test(phone)) {
            return alert('Phone number should only contain numbers.');
        }
        alert('Form submitted!');
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full min-h-screen bg-white">
                <div className="w-full max-w-4xl p-10 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold text-center mb-6">CONTACT US</h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" id="firstName" name="firstName" required
                                className="mt-1 block w-full px-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required
                                className="mt-1 block w-full px-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required
                                className="mt-1 block w-full px-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="tel" pattern="\d*" id="phone" name="phone" required
                                className="mt-1 block w-full px-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" required
                                className="mt-1 block w-full px-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div>
                            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">Remarks</label>
                            <textarea id="remarks" name="remarks" required
                                className="mt-1 block w-full px-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)}></textarea>
                        </div>
                        <div className="md:col-span-2 flex justify-center">
                            <button type="submit" className="mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <OurLocations />
            <Footer />
        </>
    );
};

export default ContactForm;



