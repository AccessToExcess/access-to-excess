import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FoodPickup from './pages/FoodPickup';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/food-pickup" element={<FoodPickup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
