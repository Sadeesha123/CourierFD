import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";

const DataTable = ({ data }) => {
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
                Header: "Receiver Name",
                accessor: "receivename",
            },
            {
                Header: "Receiver Address",
                accessor: "receiveaddress",
            },
            {
                Header: "Province",
                accessor: "province",
            },
            {
                Header: "Item Type",
                accessor: "item",
            },
            {
                Header: "Predetermines Days",
                accessor: "days",
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
        <div className="p-20">
            <input
                type="text"
                value={globalFilter || ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="absolute h-8 pl-2 text-lg bg-black/10 top-28 right-16"
                placeholder="Search..."
            />
            <div className="text-center ">
                <table {...getTableProps()} className="">
                    <thead className=" align-center text-sm border-[1px] border-black/50  uppercase bg-black/20 text-gray-900">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="p-11 border-[1px] border-black/50"
                                        key={column.id}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                                <th>Other Informations</th>
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
                                                    className="p-7 border-[1px] border-black/50 bg-gray-100 hover:bg-slate-300"
                                                    key={cell.column.id}
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            </>
                                        );
                                    })}
                                    <td className="flex gap-2 p-1 ">
                                        <a href={`/UpdateOrder/${row.id + 1}`}>
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                                                Update
                                            </button>
                                        </a>
                                        <button
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                            onClick={() => setShowPopup(row.id + 1)}
                                        >
                                            Remove
                                        </button>
                                        <a href={`/MoreInfo/${row.id + 1}`}>
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
                                                More_Info
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

export default DataTable;
