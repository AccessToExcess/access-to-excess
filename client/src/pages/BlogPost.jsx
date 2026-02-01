import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Hardcoded blog posts data (will be replaced with Airtable later)
const blogPosts = {
    "location-update": {
        title: "Location Update",
        date: "January 13, 2026",
        heroImage: "/about-location-update.jpg",
        content: `
            <p>Heads up! Our main lot is super muddy and a bit unsafe right now, so we've temporarily moved just down the road.</p>
            
            <h2>New Temporary Location</h2>
            <p>For the time being, you can find us at the community center parking lot, just a 2-minute walk from our usual spot at 978 Olive Road. We'll have clear signage to guide you.</p>
            
            <h2>What to Expect</h2>
            <p>Everything else stays the same — same times, same folks, same good food. We're just working around the weather and ground conditions to keep everyone safe.</p>
            
            <h2>When We'll Be Back</h2>
            <p>We expect to return to our regular location once the ground dries out, likely within 2-3 weeks depending on the weather. We'll keep you posted through our usual channels.</p>
            
            <p>Thanks for your patience and flexibility. We appreciate you all!</p>
        `
    },
    "pole-barn-project": {
        title: "Pole Barn Project",
        date: "December 30, 2025",
        heroImage: "/about-pole-barn.png",
        content: `
            <p>We're really excited to take the next step toward building a small pole barn at our Olive Road site. This has been a dream of ours for a long time, and we're finally making it happen!</p>
            
            <h2>Why a Pole Barn?</h2>
            <p>Having a covered structure will allow us to:</p>
            <ul>
                <li>Store rescued food safely and keep it out of the weather</li>
                <li>Continue distributions even during rain or intense sun</li>
                <li>Create a more welcoming space for our community</li>
                <li>Expand our capacity to rescue and redistribute more food</li>
            </ul>
            
            <h2>The Plan</h2>
            <p>We're starting with a modest 20x30 foot structure that will house our main distribution area. The design will be simple but functional, with open sides for airflow and easy access.</p>
            
            <h2>How You Can Help</h2>
            <p>We're currently fundraising for materials and looking for volunteers with construction experience. If you'd like to contribute or lend a hand, please reach out!</p>
            
            <p>Stay tuned for updates as we break ground in the coming months.</p>
        `
    },
    "food-stands": {
        title: "Food Stands of 2025",
        date: "December 30, 2025",
        heroImage: "/about-food-stands.jpg",
        content: `
            <p>What a year it's been! Our food stands have grown so much in 2025, and we couldn't have done it without our amazing community of volunteers and supporters.</p>
            
            <h2>By the Numbers</h2>
            <p>This year, our food stands:</p>
            <ul>
                <li>Rescued over 50,000 pounds of fresh produce</li>
                <li>Served more than 2,000 community members</li>
                <li>Operated at 6 different locations across Dayton</li>
                <li>Added 3 new weekly distribution sites</li>
            </ul>
            
            <h2>Community Favorites</h2>
            <p>Some of the most loved items at our stands this year included:</p>
            <ul>
                <li>Fresh tomatoes from local farms</li>
                <li>Rescued bakery items from local bakeries</li>
                <li>Seasonal squash and root vegetables</li>
                <li>Fresh herbs and greens</li>
            </ul>
            
            <h2>Looking Ahead</h2>
            <p>In 2026, we plan to expand to even more neighborhoods and increase our distribution frequency. Thank you for being part of this journey!</p>
        `
    },
    "produce-distribution": {
        title: "Produce Distribution Highlights",
        date: "December 30, 2025",
        heroImage: "/about-produce.jpg",
        content: `
            <p>All the produce we saved and distributed this year represents hundreds of hours of work by our dedicated volunteers and the generosity of local farms and grocery stores.</p>
            
            <h2>Where It Comes From</h2>
            <p>Our produce comes from a variety of sources:</p>
            <ul>
                <li>Local farms with surplus harvests</li>
                <li>Grocery stores with items near expiration</li>
                <li>Farmers markets with end-of-day donations</li>
                <li>Community gardens with extra yields</li>
            </ul>
            
            <h2>The Rescue Process</h2>
            <p>Every piece of produce goes through our quality check process. We sort through donations carefully, setting aside items that are still perfectly good to eat but might not meet retail standards.</p>
            
            <h2>Making an Impact</h2>
            <p>By rescuing this food, we're not only feeding our community — we're also preventing perfectly good food from ending up in landfills, where it would contribute to greenhouse gas emissions.</p>
            
            <p>Thank you for supporting food rescue in Dayton!</p>
        `
    }
};

function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center px-6">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <ArrowLeft size={32} className="text-gray-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">Post Not Found</h1>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">The blog post you're looking for doesn't exist or may have been moved.</p>
                    <button
                        onClick={() => navigate('/about')}
                        className="px-8 py-3.5 bg-pro-green text-white rounded-lg hover:bg-pro-dark transition-all shadow-md hover:shadow-lg font-medium"
                    >
                        Back to Updates
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in bg-white min-h-screen">
            {/* Hero Section - Taller with better proportions */}
            <section className="relative h-[55vh] min-h-[450px] max-h-[600px] flex items-end -mt-20">
                <div className="absolute inset-0">
                    <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Multi-layer gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pb-14 pt-20">
                    <button
                        onClick={() => navigate('/about')}
                        className="group flex items-center gap-2.5 text-white/80 hover:text-white mb-8 transition-all"
                    >
                        <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <ArrowLeft size={16} />
                        </span>
                        <span className="text-sm font-medium">Back to Updates</span>
                    </button>

                    {/* Date Badge */}
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium tracking-wide uppercase">
                            {post.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl">
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Content Container - Wider with better structure */}
            <div className="relative">
                {/* Decorative top edge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pro-light-green/30 to-transparent"></div>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
                    {/* Article Summary/Lead (first paragraph emphasis) */}
                    <div className="mb-10 pb-10 border-b border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-pro-light-green/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-pro-green"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Community Update</span>
                        </div>
                    </div>

                    {/* Main Content with enhanced typography */}
                    <div
                        className="prose prose-lg md:prose-xl prose-green max-w-none
                            prose-headings:text-[#166534] prose-headings:font-bold prose-headings:tracking-tight
                            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:relative
                            prose-h2:pl-0 prose-h2:before:hidden
                            prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[17px] prose-p:md:text-lg
                            prose-ul:my-6 prose-ul:pl-0 prose-ul:list-none
                            prose-li:text-gray-600 prose-li:mb-3 prose-li:pl-7 prose-li:relative
                            prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 
                            prose-li:before:top-[10px] prose-li:before:w-2 prose-li:before:h-2 
                            prose-li:before:bg-pro-light-green prose-li:before:rounded-full
                            prose-a:text-pro-green prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                            prose-strong:text-gray-800"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer Section with enhanced styling */}
                    <div className="mt-16 pt-10 border-t border-gray-100">
                        {/* Share/Action row */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Published on</p>
                                <p className="text-gray-700 font-medium">{post.date}</p>
                            </div>

                            <button
                                onClick={() => navigate('/about')}
                                className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-50 hover:bg-pro-light-green/20 
                                    rounded-lg transition-all text-pro-green border border-gray-100 hover:border-pro-light-green/50"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span className="font-semibold">All Updates</span>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default BlogPost;
