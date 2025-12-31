import React from 'react';

function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-8 md:mb-0">
                    <h4 className="text-white text-lg font-bold mb-2">Access to Excess</h4>
                    <p className="text-sm max-w-xs">
                        Recovering and redistributing wholesome surplus foods in Dayton, Ohio.
                    </p>
                </div>

                <div className="flex space-x-6">
                    {/* Social Placeholders */}
                    <div className="w-6 h-6 bg-stone-700 rounded-full hover:bg-stone-600 cursor-pointer transition-colors"></div>
                    <div className="w-6 h-6 bg-stone-700 rounded-full hover:bg-stone-600 cursor-pointer transition-colors"></div>
                    <div className="w-6 h-6 bg-stone-700 rounded-full hover:bg-stone-600 cursor-pointer transition-colors"></div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-stone-800 text-xs text-stone-600 text-center md:text-left">
                &copy; {new Date().getFullYear()} Access to Excess. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
