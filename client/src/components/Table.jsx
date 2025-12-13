import React from 'react';
import { useState, useEffect } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

export default function Table() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Get data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/api/data');

                if (!response.ok){
                    throw new Error('Failed to fetch');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    const columns = [
        {
            accessorKey: 'fields.Name',
            header: 'Name',
        },
        {
            accessorKey: 'fields.Notes',
            header: 'Notes',
        },
        {
            accessorKey: 'fields.Sign up',
            header: 'Sign Up',
        },
        {
            accessorKey: 'createdTime',
            header: 'Created',
            cell: info => new Date(info.getValue()).toLocaleDateString(),
        },
    ];  

    const table = useReactTable({
        data: data?.records || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (loading) return <div> Loading... </div>;
    if (error) return <div> Error: {error} </div>

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Records</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className="border border-gray-300 px-4 py-2 text-left font-semibold"
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="border border-gray-300 px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}