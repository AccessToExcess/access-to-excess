import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    // Hardcoded blog-style content cards with routes
    const updates = [
        {
            id: 1,
            slug: "location-update",
            image: "/about-location-update.jpg",
            title: "Location Update",
            date: "January 13, 2026",
            excerpt: "Heads up! Our main lot is super muddy and a bit unsafe right now, so we've temporarily moved just down the road."
        },
        {
            id: 2,
            slug: "pole-barn-project",
            image: "/about-pole-barn.png",
            title: "Pole Barn Project",
            date: "December 30, 2025",
            excerpt: "We're really excited to take the next step toward building a small pole barn at our Olive Road site."
        },
        {
            id: 3,
            slug: "food-stands",
            image: "/about-food-stands.jpg",
            title: "Food Stands",
            date: "December 30, 2025",
            excerpt: "Food stands of 2025."
        },
        {
            id: 4,
            slug: "produce-distribution",
            image: "/about-produce.jpg",
            title: "Produce Distribution",
            date: "December 30, 2025",
            excerpt: "All the produce we saved and distributed."
        }
    ];

    const scrollToUpdates = () => {
        document.getElementById('updates-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="animate-fade-in bg-white">
            {/* Hero Section - Full width background with overlay - SAME HEIGHT AS HOME */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/about-hero.jpg"
                        alt="Fresh produce at Access to Excess"
                        className="w-full h-full object-cover"
                    />
                    {/* Linear Gradient Overlay - Left to Right (dark on left, fades right) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)'
                        }}
                    ></div>
                    {/* Additional dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        <span className="text-pro-light-green">5k pounds</span><br /> of excess food<br />
                        saved this week.
                    </h1>
                    <button
                        onClick={scrollToUpdates}
                        className="mt-4 px-8 py-3 bg-pro-green text-white text-base font-semibold rounded-md hover:bg-[#14532d] transition-all shadow-lg"
                    >
                        See Recent Updates
                    </button>
                </div>
            </section>

            {/* Blog-Style Updates Section */}
            <section id="updates-section" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* 2x2 Grid of Cards */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {updates.map((update) => (
                            <article
                                key={update.id}
                                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                                onClick={() => navigate(`/blog/${update.slug}`)}
                            >
                                {/* Card Image */}
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={update.image}
                                        alt={update.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-[#166534] mb-1 group-hover:text-pro-green transition-colors">
                                        {update.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-3">
                                        {update.date}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {update.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
