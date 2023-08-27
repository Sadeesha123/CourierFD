import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";

const DataTable2 = ({ data }) => {
    // Define the table columns
    const columns = useMemo(
        () => [
            {
                Header: "Customer ID",
                accessor: "id",
            },
            {
                Header: "Sender Name",
                accessor: "sendname",
            },
            {
                Header: "Sender Address",
                accessor: "senderaddress",
            },
            {
                Header: "Province",
                accessor: "province",
            },
            {
                Header: "Last Item",
                accessor: "lastitem",
            },
            {
                Header: "Feedback",
                accessor: "feedback",
            },
            {
                Header: "Charn Status",
                accessor: "charnstatus",
            },

            // Add more columns as needed
        ],
        []
    );

    function setShowPopup(id) {
        if (window.confirm("Are you sure you want to remove this item?")) {
            setShowPopup(true);
        }
    }

    // Create an instance of the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter);

    const { globalFilter } = state;

    return (
        <div className="w-[100%]">
            <div className="flex justify-end">
                <input
                    type="text"
                    value={globalFilter || ""}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="h-8 pl-2 text-lg bg-black/10 top-28 mb-4"
                    placeholder="Search..."
                /><br/><br/>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" {...getTableProps()}>
                    <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="" key={headerGroup.id}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="p-3 border-[1px] border-black/50"
                                        key={column.id}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                                <th classname="p-3 border-[1px] border-black/50">Actions</th>
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="border-[1px] border-black/50" key={row.id}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <>
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="p-3 border-[1px] border-black/50 hover:bg-slate-300"
                                                    key={cell.column.id}
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            </>
                                        );
                                    })}
                                    <td className="flex gap-2 p-1 ">
                                        
                                        
                                        <a href={`/MoreInfo/${row.id + 1}`}>
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-3">
                                                View
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable2;