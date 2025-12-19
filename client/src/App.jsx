import Table from './components/FoodPickupTable.jsx'

function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Access to Excess</h1>
            <Table 
                endpoint="food-pickup"
                title="Food Pickup"
            />
        </div>
    )
}

export default App
