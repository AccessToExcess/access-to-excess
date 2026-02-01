import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-pro-dark text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Left Column: Contact */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold tracking-widest uppercase mb-6">CONTACT</h3>
                    <div className="space-y-2 text-[15px] font-medium opacity-90">
                        <p>accesstoexcessfood@gmail.com</p>
                        <p>937-931-3278</p>
                    </div>

                    {/* Line-art style food icons */}
                    <div className="flex gap-6 mt-8 opacity-60">
                        {/* Apple icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 4c-1.5-2-4-2-5-1s-2 4 0 8c1 2 3 5 5 7 2-2 4-5 5-7 2-4 1-7 0-8s-3.5-1-5 1z" />
                            <path d="M12 4V2" />
                        </svg>
                        {/* Strawberry icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 6c-4 0-6 3-6 6s4 8 6 10c2-2 6-7 6-10s-2-6-6-6z" />
                            <path d="M10 4l2-2 2 2" />
                        </svg>
                        {/* Cheese icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4 18L20 12L20 18L4 18Z" />
                            <path d="M4 18L12 6L20 12" />
                            <circle cx="10" cy="15" r="1" />
                            <circle cx="15" cy="14" r="1" />
                        </svg>
                    </div>
                </div>

                {/* Right Column: Connect & Legal */}
                <div className="flex flex-col md:items-end space-y-8 text-right">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-4 md:text-right">CONNECT WITH US</h3>
                        <div className="flex gap-4 md:justify-end">
                            <a href="#" className="bg-white text-pro-dark p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white text-pro-dark p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="max-w-md pt-8">
                        <p className="text-[13px] leading-relaxed opacity-80 font-light">
                            Access to Excess is registered as a 501(c)(3) non-profit organization. Contributions are tax-deductible to the extent permitted by law (contact us for tax-identification information).
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
