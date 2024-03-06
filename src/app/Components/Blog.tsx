// pages/news-events-blogs.js
import Head from 'next/head';
import Image from 'next/image';

export default function NewsEventsBlogs() {
    const cards = [
        { id: 1, title: "News Item 1", image: "/ETH7.webp", description: "Description for News Item 1" },
        { id: 2, title: "Event Highlight", image: "/ETH8.webp", description: "Description for Event Highlight" },
        { id: 3, title: "Blog Post Feature", image: "/ETH9.webp", description: "Description for Blog Post Feature" },
        { id: 4, title: "Blog Post Feature", image: "/ETH10.webp", description: "Description for Blog Post Feature" },
    ];

    return (
        <>        <div style={{ backgroundColor: '#dcfce7' }} className=" p-12 rounded-lg shadow flex  flex-col items-center justify-center" >
                <h1 className="text-3xl font-bold text-center mb-6">News, Events & Blogs</h1>
                <div className="text-center mb-12">
                    <h3>The source of trustworthy health and medical information.</h3>
                    <h3>Through this section, we provide research-based health information, and all that is happening in Aster Hospital.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <div key={card.id} className="bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <Image src={card.image} alt={card.title} width={300} height={200} className="rounded-t-lg object-cover" />
                            <div className="p-4">
                                <h2 className="font-bold text-xl mb-2">{card.title}</h2>
                                <p className="text-gray-700">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
