import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import Blog from './pages/Blog';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const navigateTo = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
            <Header currentPage={currentPage} navigateTo={navigateTo} />

            {currentPage === 'home' && <Home onGetInvolved={() => navigateTo('volunteer')} />}
            {currentPage === 'about' && <About />}
            {currentPage === 'volunteer' && <Volunteer />}
            {currentPage === 'blog' && <Blog />}

            <Footer />
        </div>
    );
}

export default App;
