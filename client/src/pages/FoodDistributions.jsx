import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import MailchimpSignupForm from '../components/MailchimpSignupForm';

function FoodDistributions() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // All unique images for the collage - no duplicates
    const collageImages = {
        topRow: [
            { src: "/dist-blue-tent.jpg", alt: "Access to Excess blue tent with produce" },
            { src: "/dist-red-table.jpg", alt: "Fresh vegetables on red gingham table" },
            { src: "/dist-yellow-table.jpg", alt: "Yellow table with grapes and produce" },
            { src: "/dist-self-serve.jpg", alt: "Self-serve produce stand" },
        ],
        leftColumn: [
            { src: "/dist-love-tent.jpg", alt: "Love is Love tent with community" },
            { src: "/volunteer-action-2.jpg", alt: "Volunteers at food stand" },
        ],
        rightColumn: [
            { src: "/dist-community.jpg", alt: "Community members selecting produce" },
            { src: "/dist-volunteers.jpg", alt: "Volunteers serving food" },
        ],
        bottomRow: [
            { src: "/about-food-stands.jpg", alt: "Food stand setup" },
            { src: "/dist-bread-sharing.jpg", alt: "Volunteer sharing bread" },
            { src: "/volunteer-action-3.jpg", alt: "Farmers market booth" },
            { src: "/about-location-update.jpg", alt: "Fresh produce display" },
        ]
    };

    // FAQ items based on the wireframe
    const faqs = [
        {
            question: "Where do distributions take place?",
            answer: "Our food distributions take place at 978 Olive Rd, Dayton, OH 45417. If there are extenuating circumstances (weather, logistics, large deliveries, or special events), the location may change. Any changes will always be shared in advance on our website and social media."
        },
        {
            question: "Who can come?",
            answer: "Anyone who needs food is welcome. No ID. No paperwork. No personal questions."
        },
        {
            question: "Do I need to sign up?",
            answer: "No. Our distributions are first come, first served."
        },
        {
            question: "What can I expect when I arrive?",
            answer: "Check in with a volunteer, wait your turn, receive food, and head home and share as needed."
        },
        {
            question: "What kind of food will there be?",
            answer: "It changes every time. You might see produce, meat, dairy, or frozen items, bakery goods, and shelf-stable food. We share what we rescue — availability varies."
        },
        {
            question: "Can I choose my food?",
            answer: "Yes! We encourage people to try new things."
        },
        {
            question: "How much can I take?",
            answer: "We trust people to take what they need. If you're helping a neighbor who can't get out, you're welcome to take for them, too. Sharing food helps reduce waste and strengthens our community."
        },
        {
            question: "What should I bring?",
            answer: "If you can: bags, boxes, or bins. If you can't — that's okay!"
        },
        {
            question: "Do you collect personal information?",
            answer: "We believe people know their own needs better than anyone else. Asking for personal details can create unnecessary barriers and discomfort. By not collecting personal information, we protect privacy, reduce stigma, move faster and serve more people, and build trust within our community. Our focus is simple: rescue food, reduce waste, and make sure it gets shared."
        }
    ];

    return (
        <div className="animate-fade-in bg-white min-h-screen">
            {/* Signup Section with Image Collage */}
            <section className="px-4 md:px-6 py-8 md:py-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* Top Row of Images */}
                    <div className="hidden md:grid grid-cols-4 gap-2 mb-3">
                        {collageImages.topRow.map((img, index) => (
                            <div
                                key={index}
                                className="aspect-[4/3] rounded-xl overflow-hidden"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Content: Form with Side Images */}
                    <div className="grid grid-cols-12 gap-2 md:gap-3 items-stretch">
                        {/* Left Images Column */}
                        <div className="hidden md:flex flex-col gap-2 col-span-3">
                            <div className="flex-1 rounded-xl overflow-hidden">
                                <img
                                    src={collageImages.leftColumn[0].src}
                                    alt={collageImages.leftColumn[0].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 rounded-xl overflow-hidden">
                                <img
                                    src={collageImages.leftColumn[1].src}
                                    alt={collageImages.leftColumn[1].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Center: Signup Form - Compact */}
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-white h-full flex flex-col justify-center py-6 md:py-8 px-4 md:px-8">
                                {/* Form Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-xl md:text-2xl font-bold text-pro-green mb-2">
                                        Sign Up for Food Distribution Alerts
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                                        Get notified for free fruit, veg, bread and anything else we can get our hands on.
                                        Food Stands are open to everyone.
                                    </p>
                                </div>

                                {/* Mailchimp Form - EXACT SAME LOGIC */}
                                <MailchimpSignupForm variant="food-distributions" />

                                {/* Terms Note */}
                                <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                                    By signing up, you agree to receive SMS alerts from Access to Excess.
                                    Text STOP to opt-out at any time.
                                </p>
                            </div>
                        </div>

                        {/* Right Images Column */}
                        <div className="hidden md:flex flex-col gap-2 col-span-3">
                            <div className="flex-1 rounded-xl overflow-hidden">
                                <img
                                    src={collageImages.rightColumn[0].src}
                                    alt={collageImages.rightColumn[0].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 rounded-xl overflow-hidden">
                                <img
                                    src={collageImages.rightColumn[1].src}
                                    alt={collageImages.rightColumn[1].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row of Images */}
                    <div className="hidden md:grid grid-cols-4 gap-2 mt-3">
                        {collageImages.bottomRow.map((img, index) => (
                            <div
                                key={index}
                                className="aspect-[4/3] rounded-xl overflow-hidden"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Image Grid */}
                    <div className="grid grid-cols-2 md:hidden gap-2 mt-6">
                        {[...collageImages.topRow.slice(0, 2), ...collageImages.leftColumn].map((img, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-xl overflow-hidden"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - Matching Volunteer Page Design */}
            <section className="px-6 md:px-8 py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#166534] mb-4">
                            How Do Food Distributions Work?
                        </h2>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            We rescue good food that would otherwise go to waste and share it with our community.
                            Every distribution looks a little different!
                        </p>
                    </div>

                    {/* FAQ Accordion Container - Light Green Background (same as Volunteer page) */}
                    <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-8 shadow-sm">
                        <div className="space-y-0">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-[#dcfce7] last:border-b-0"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full py-5 flex justify-between items-center text-left hover:bg-[#dcfce7]/50 transition-colors px-2 rounded-lg"
                                    >
                                        <span className="text-sm md:text-base font-medium text-gray-800 pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500">
                                            {openFaq === index ? (
                                                <Minus size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </span>
                                    </button>
                                    {openFaq === index && (
                                        <div className="pb-5 px-2">
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FoodDistributions;
