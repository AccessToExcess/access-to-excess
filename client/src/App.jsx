import Table from './components/Table.jsx'

const foodPickupColumns = [
    {
        accessorKey: 'fields.Location',
        header: 'Location'
    },
    {
        accessorKey: 'fields.Address',
        header: 'Address',
    },
    {
        accessorKey: 'fields.StartTime',
        header: 'StartTime',
        cell: info => new Date(info.getValue()).toLocaleString(),
    },
    {
        accessorKey: 'fields.EndTime',
        header: 'EndTime',
        cell: info => new Date(info.getValue()).toLocaleString(),
},
    {
        accessorKey: 'fields.Notes',
        header: 'Notes',
    },
]; 


function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Access to Excess</h1>
            <Table 
                endpoint="food-pickup"
                columns={foodPickupColumns}
                title="Food Pickup"
            />
        </div>
    )
}

export default App
