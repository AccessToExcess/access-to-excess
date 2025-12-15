import React from 'react';

function Volunteer() {
    return (
        <div className="animate-fade-in">
            {/* Header / Intro */}
            <header className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
                    Volunteer with Access to Excess
                </h1>
                <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                    Our work is powered by neighbors helping neighbors. Whether you have a few hours a week or just an occasional afternoon, your time makes a direct impact on food security in Dayton.
                </p>
            </header>

            {/* What Volunteering Involves */}
            <section className="px-4 md:px-8 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">What Volunteering Involves</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4 text-xl font-bold">1</div>
                            <h3 className="text-lg font-bold text-stone-800 mb-2">Food Rescue</h3>
                            <p className="text-stone-600">Driving to local farms, grocers, and gardens to collect surplus produce.</p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4 text-xl font-bold">2</div>
                            <h3 className="text-lg font-bold text-stone-800 mb-2">Sorting & Prep</h3>
                            <p className="text-stone-600">Helping organize donations and ensuring quality before distribution.</p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4 text-xl font-bold">3</div>
                            <h3 className="text-lg font-bold text-stone-800 mb-2">Distributions</h3>
                            <p className="text-stone-600">Setting up free markets and welcoming community members.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Signup Form */}
            <section className="px-4 md:px-8 py-20 bg-stone-100">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sign Up to Volunteer</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                            <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Jane Doe" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="availability" className="block text-sm font-medium text-stone-700 mb-1">General Availability</label>
                            <select id="availability" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white">
                                <option value="">Select your availability...</option>
                                <option value="weekdays">Weekdays (Mon-Fri)</option>
                                <option value="weekends">Weekends (Sat-Sun)</option>
                                <option value="mornings">Mornings</option>
                                <option value="afternoons">Afternoons</option>
                                <option value="flexible">Flexible / Varies</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message / Interests (Optional)</label>
                            <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Tell us a bit about why you'd like to join or any specific skills you have..."></textarea>
                        </div>

                        <button type="button" className="w-full py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors shadow-sm text-lg">
                            Sign Up to Volunteer
                        </button>
                    </form>
                </div>
            </section>

            {/* Reassurance Section */}
            <section className="px-4 md:px-8 py-16 bg-emerald-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-emerald-900 font-medium">
                        We know life is busy. There is no minimum hour requirement. We'll add you to our volunteer list and reach out when opportunities arise. You can help whenever it fits your schedule.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Volunteer;
