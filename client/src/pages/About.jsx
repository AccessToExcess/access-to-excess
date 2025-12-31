import React from 'react';

function About() {
    return (
        <div className="animate-fade-in">
            {/* Header / Intro */}
            <header className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
                    About Access to Excess
                </h1>
                <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                    We are a community-driven organization dedicated to reducing food waste and feeding our neighbors. We believe that good food belongs on plates, not in landfills.
                </p>
            </header>

            {/* Our Mission */}
            <section className="px-4 md:px-8 py-16 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-3">Our Mission</h2>
                    <p className="text-2xl md:text-3xl font-medium text-stone-800 leading-relaxed mb-6">
                        To recover and redistribute wholesome vegetables and other surplus foods in Dayton, Ohio.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        We operate on a simple premise: there is enough food for everyone. By connecting surplus with need, we reduce food insecurity while simultaneously addressing the environmental impact of food waste.
                    </p>
                </div>
            </section>

            {/* Our Impact (2023 Stats) */}
            <section className="px-4 md:px-8 py-20 bg-stone-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Our Impact in 2023</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">45,000+</div>
                            <div className="text-stone-500 font-medium uppercase tracking-wide text-sm">Pounds of Food Rescued</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">37,500</div>
                            <div className="text-stone-500 font-medium uppercase tracking-wide text-sm">Meals Provided</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">120+</div>
                            <div className="text-stone-500 font-medium uppercase tracking-wide text-sm">Active Volunteers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth & Progress */}
            <section className="px-4 md:px-8 py-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-stone-900 mb-8">Growth & Progress</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500 mt-2 mr-4"></div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">Expanded Pickup Network</h3>
                                <p className="text-stone-600 mt-1">Partnered with 5 new local farms and 3 grocery chains to increase food recovery volume.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500 mt-2 mr-4"></div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">New Distribution Hub</h3>
                                <p className="text-stone-600 mt-1">Opened a central sorting facility to handle larger donations and improve distribution efficiency.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500 mt-2 mr-4"></div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">Community Education</h3>
                                <p className="text-stone-600 mt-1">Launched workshops on food preservation and sustainable cooking for community members.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community & Partnerships */}
            <section className="px-4 md:px-8 py-20 bg-emerald-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-stone-900 mb-6">Community & Partnerships</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        We don't do this alone. Our work is made possible through strong partnerships with local organizations and the dedication of our volunteers. We are also a proud member of the Food Rescue Alliance, connecting us to a national movement for food justice.
                    </p>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="px-4 md:px-8 py-16 bg-white text-center border-t border-stone-100">
                <div className="max-w-3xl mx-auto">
                    <p className="text-2xl font-medium text-stone-800 italic">
                        "Together, we are building a Dayton where no good food goes to waste and no one goes hungry."
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;
