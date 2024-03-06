
export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white">
                <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                        <div>
                            <h2 className="text-sm font-semibold uppercase text-center lg:text-left">Quick Link</h2>
                            <ul className="mt-2">
                                <li className="mb-2">
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Find a Doctor</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Make an Enquiry</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Hospitality</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Careers</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Patient Rights and Responsibilities</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase text-center lg:text-left">Multispeciality</h2>
                            <ul className="mt-2">
                                <li className="mb-2">
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Dentistry</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Emergency Medicine</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Surgery</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Psychiatry & Counselling Services</a>
                                </li>
                                <li>
                                    <a href="https://example.com/hospitality" className="hover:underline text-center lg:text-left">Rheumatology</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase text-center lg:text-left">Ethio-Tebib Centres Of Excellence</h2>
                            <ul className="mt-2">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline text-center lg:text-left">Neuro Science</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline text-center lg:text-left">Orthopaedics</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline text-center lg:text-left">Pulmonology & Critical Care</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline text-center lg:text-left">Medical Value Travel</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline text-center lg:text-left">Book Appointment</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline text-center lg:text-left">Frequently Asked Questions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <h1>Ethio-Tebib</h1>
                            <p className="text-sm font-semibold mb-2">Subscribe To Newsletter</p>
                            <form className="flex">
                                <input type="email" placeholder="Your email address" aria-label="Your email address" className="p-2 rounded-l-lg text-gray-800" required />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
                                    Subscribe
                                </button>
                            </form>
                            <div>
                                <h1 className="mt-3 align-middle">Ethio-Tebib Centre</h1>
                                <ul className="mt-2">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline text-center lg:text-left">News & Event</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline text-center lg:text-left">Testimonial</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline text-center lg:text-left">Organ Transplant</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <span className="text-sm">© 2024 Ethio-Tebib Hospital™. All Rights Reserved.</span>
                        <div className="flex mt-4 space-x-6 md:mt-0">
                            <h3>Follow Us</h3>
                            <a href="https://www.facebook.com/ethiotebib/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.936 4.388 10.854 10.125 11.85v-8.385H7.078v-3.465h3.047v-2.636c0-3.007 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.873v2.362h3.328l-.532 3.465h-2.796v8.385C19.612 22.927 24 18.009 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fethiotebib" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.044.762.128 1.124-4.09-.205-7.717-2.165-10.144-5.144-.424.724-.666 1.565-.666 2.476 0 1.71.87 3.213 2.188 4.096-.806-.026-1.566-.247-2.229-.616v.062c0 2.386 1.697 4.374 3.946 4.828-.413.112-.848.171-1.296.171-.314 0-.62-.03-.917-.086.621 1.934 2.422 3.343 4.557 3.381-1.67 1.309-3.778 2.089-6.066 2.089-.394 0-.779-.023-1.158-.067 2.163 1.389 4.729 2.2 7.486 2.2 8.984 0 13.902-7.436 13.902-13.896 0-.211-.005-.422-.014-.632.953-.688 1.78-1.547 2.437-2.527z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/watch?v=m3th_ggHHvk" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M23.498 6.186a3.017 3.017 0 00-2.122-2.136C19.69 3.322 12 3.322 12 3.322s-7.69 0-9.375.729a3.017 3.017 0 00-2.122 2.136c-.479 2.778-.479 8.596-.479 8.596s0 5.816.479 8.594a3.017 3.017 0 002.122 2.137c1.686.728 9.376.728 9.376.728s7.69 0 9.375-.729a3.017 3.017 0 002.122-2.137c.479-2.778.479-8.594.479-8.594s0-5.818-.479-8.596zM9.545 15.407V8.592l6.479 3.407-6.479 3.408z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/ethiotebib/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=et" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-0.8-1.8-1.8s0.8-1.8 1.8-1.8 1.8 0.8 1.8 1.8-0.8 1.8-1.8 1.8zm13.5 12.3h-3v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7h-3v-11h2.9v1.5h0.1c0.4-0.7 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.8v6.6z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/ethiotebibhospital/?hl=en" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm6.72 1.5h-5.94a4.25 4.25 0 0 0-4.25 4.25v5.94c0 2.35 1.9 4.25 4.25 4.25h5.94a4.25 4.25 0 0 0 4.25-4.25v-5.94a4.25 4.25 0 0 0-4.25-4.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.72-.75a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24z" />
                                </svg>
                            </a>
                            

                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

